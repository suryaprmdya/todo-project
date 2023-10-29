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
    case "EDIT_IS_FINISHED":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {...todo, isFinished: action.payload.isFinished}
            : todo
        ),
      };
    default:
      return state;
  }
}

export default todoReducer;
