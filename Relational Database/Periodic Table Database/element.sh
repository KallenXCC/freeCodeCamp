#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"

START() {
  if [ "$#" -eq 0 ]; then
    echo "Please provide an element as an argument."
    exit 0
  fi

  arg="$1"

  case "$1" in
    [0-9]*) SEARCH_NUMBER $1;;
    [a-zA-Z]|[a-zA-Z][a-zA-Z]) SEARCH_SYMBOL $1;;
    [a-zA-Z][a-zA-Z]*) SEARCH_NAME $1;;
    *) SEARCH_FAILED ;;
  esac
}

SEARCH_FAILED() {
  echo "I could not find that element in the database."
  exit 0
}

SEARCH_NUMBER() {
  ATOMIC_NUMBER=$1
  read SYMBOL PIPE NAME <<< $($PSQL "SELECT symbol, name FROM elements WHERE atomic_number=$ATOMIC_NUMBER")

  if [[ -z $NAME ]]
  then
    SEARCH_FAILED
  fi

  read TYPE_ID PIPE MASS PIPE MELTING PIPE BOILING <<< $($PSQL "SELECT type_id, atomic_mass, melting_point_celsius, boiling_point_celsius FROM properties WHERE atomic_number=$ATOMIC_NUMBER")
  TYPE=$($PSQL "SELECT type FROM types WHERE type_id=$TYPE_ID")
  echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $(echo $TYPE | sed -E 's/^ *| *$//g'), with a mass of $MASS amu. $NAME has a melting point of $MELTING celsius and a boiling point of $BOILING celsius."
  exit 0
}

SEARCH_SYMBOL() {
  SYMBOL=$1
  ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE symbol='$SYMBOL'")

  if [[ -z $ATOMIC_NUMBER ]]
  then
    SEARCH_FAILED
  fi

  SEARCH_NUMBER $ATOMIC_NUMBER
}

SEARCH_NAME() {
  NAME=$1
  ATOMIC_NUMBER=$($PSQL "SELECT atomic_number FROM elements WHERE name='$NAME'")

  if [[ -z $ATOMIC_NUMBER ]]
  then
    SEARCH_FAILED
  fi

  SEARCH_NUMBER $ATOMIC_NUMBER
}

START $1