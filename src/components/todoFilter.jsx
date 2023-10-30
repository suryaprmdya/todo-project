import React from "react";
import { useDispatch } from "react-redux";
import {
  getTodo,
  seeActiveTodos,
  seeCompletedTodos,
} from "../redux/actions/todoAction";

function TodoFilter() {
  const dispatch = useDispatch();

  const handleTodosAll = () => {
    dispatch(getTodo());
  };

  const handleTodosActive = () => {
    dispatch(seeActiveTodos());
  };
  const handleTodosCompleted = () => {
    dispatch(seeCompletedTodos());
  };

  return (
    <div className="flex flex-row gap-6 justify-center mt-6 mx-4 sm:mx-0">
      <div className="w-full sm:w-1/3 flex flex-row gap-5">
        <button
          onClick={() => handleTodosAll()}
          className="bg-slate-500 rounded-xl focus:bg-teal-400"
        >
          <h1 className="px-4 py-1 text-xs font-bold text-white">ALL</h1>
        </button>
        <button
          onClick={() => handleTodosActive()}
          className="bg-slate-500 rounded-xl focus:bg-teal-400"
        >
          <h1 className="px-4 py-1 text-xs font-bold text-white">ACTIVE</h1>
        </button>
        <button
          onClick={() => handleTodosCompleted()}
          className="bg-slate-500 rounded-xl focus:bg-teal-400"
        >
          <h1 className="px-4 py-1 text-xs font-bold text-white">COMPLETED</h1>
        </button>
      </div>
    </div>
  );
}

export default TodoFilter;
