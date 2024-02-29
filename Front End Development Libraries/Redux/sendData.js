const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    /* This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state */
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  /* the body of the addNoteText() function returns an action object. The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object */
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());