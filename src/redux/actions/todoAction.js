import axios from "axios";

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

export const addTodo = (newTodo) => async (dispatch) => {
  const url = "https://652f72f90b8d8ddac0b27cb8.mockapi.io/todo";
  await axios.post(url, newTodo);

  dispatch(getTodo());
};

export const deleteTodo = (id) => async (dispatch) => {
    const url = `https://652f72f90b8d8ddac0b27cb8.mockapi.io/todo/${id}`;
    await axios.delete(url);
  
    dispatch(getTodo());
};