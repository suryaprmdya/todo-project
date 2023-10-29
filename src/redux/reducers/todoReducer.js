const intialState = {
  todos: [],
  isLoading: false,
  error: "",
};

function todoReducer(state = intialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_TODO":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
}

export default todoReducer;