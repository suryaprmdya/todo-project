import axios from "axios";

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

function successGetTodo(data) {
  return {
    type: "SUCCESS_GET_TODO",
    payload: data,
  };
}

export function getTodo() {
  return async function (dispatch) {

    const url = "https://652f72f90b8d8ddac0b27cb8.mockapi.io/todo";
    const {data} = await axios(url);

    dispatch(successGetTodo(data));
  };
}

export default todoReducer;