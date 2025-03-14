#!/bin/bash

PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

SECRET_NUMBER=$((RANDOM % 1000 + 1))
ATTEMPT_NUM=0

WELCOME() {
  echo "Enter your username:"

  read USERNAME

  PLAYER_ID=$($PSQL "SELECT player_id FROM players WHERE username='$USERNAME'")
  GAMES_PLAYED=0
  BEST_GAME=-1

  if [[ -z $PLAYER_ID ]]
  then
    INSERT_PLAYER_RESULT=$($PSQL "INSERT INTO players(username) VALUES('$USERNAME')")
    echo "Welcome, $USERNAME! It looks like this is your first time here."
  else
    GAMES_PLAYED=$($PSQL "SELECT games_played FROM players WHERE player_id=$PLAYER_ID")
    BEST_GAME=$($PSQL "SELECT best_game FROM players WHERE player_id=$PLAYER_ID")
    echo "Welcome back, $USERNAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."
  fi

  echo "Guess the secret number between 1 and 1000:"

  GUESS_LOOP

  echo "You guessed it in $ATTEMPT_NUM tries. The secret number was $SECRET_NUMBER. Nice job!"

  GAMES_PLAYED=$(($GAMES_PLAYED + 1))
  UPDATE_GAMES_PLAYED_RESULT=$($PSQL "UPDATE players SET games_played=$GAMES_PLAYED")
  if [[ $ATTEMPT_NUM -lt $BEST_GAME || $BEST_GAME -lt 0 ]]
  then
    UPDATE_BEST_GAME_RESULT=$($PSQL "UPDATE players SET best_game=$ATTEMPT_NUM")
  fi
}

GUESS_LOOP() {
  read GUESS
  ATTEMPT_NUM=$(($ATTEMPT_NUM + 1))

  if [[ "$GUESS" =~ ^-?[0-9]+$ ]]
  then
    if [[ $GUESS -gt $SECRET_NUMBER ]]
    then
      echo "It's lower than that, guess again:"
      GUESS_LOOP
    elif [[ $GUESS -lt $SECRET_NUMBER ]]
    then
      echo "It's higher than that, guess again:"
      GUESS_LOOP
    fi
  else
    echo "That is not an integer, guess again:"
    GUESS_LOOP
  fi
}

WELCOME