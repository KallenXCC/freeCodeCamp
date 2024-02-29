const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
    // if it receives an action of type 'LOGIN' it returns a state object with login set to true.
    if(action.type == 'LOGIN') {
      return state = { login: true }
    } else { // Otherwise, it returns the current state
      return state;
    }
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };