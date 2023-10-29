import axios from "axios";

function successGetTodo(data) {
  return {
    type: "SUCCESS_GET_TODO",
    payload: data,
  };
}

function successUpdateIsFinished(id, data) {
  return {
    type: "EDIT_IS_FINISHED",
    payload: {id, isFinished: data.isFinished},
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

export const editIsFinished = (id, isFinished) => async (dispatch) => {
  try {
    const {data} = await axios.put(
      `https://652f72f90b8d8ddac0b27cb8.mockapi.io/todo/${id}`,
      {isFinished}
    );

    dispatch(successUpdateIsFinished(id, data));
  } catch (error) {
    console.error("Gagal memperbarui status isFinished:", error);
  }
};
