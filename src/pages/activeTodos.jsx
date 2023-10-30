import React, { useEffect } from "react";
import TodoList from "../components/todoList";
import { useDispatch } from "react-redux";
import {
  getTodo,
  seeActiveTodos,
  seeCompletedTodos,
} from "../redux/actions/todoAction";
import { Link } from "react-router-dom";
import TodoInput from "../components/todoInput";

function ActiveTodos() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(seeActiveTodos());
  }, []);

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
    <>
      {/* <TodoInput /> */}
      <div className="flex flex-row gap-6 justify-center mt-6 mx-4 sm:mx-0">
        <div className="w-full sm:w-1/3 flex flex-row gap-5">
          <Link
            to="/"
            onClick={() => handleTodosAll()}
            className="bg-slate-500 rounded-xl"
          >
            <h1 className="px-4 py-1 text-xs font-bold text-white">ALL</h1>
          </Link>
          <Link
            to="/activeTodos"
            onClick={() => handleTodosActive()}
            className="bg-teal-500 rounded-xl "
          >
            <h1 className="px-4 py-1 text-xs font-bold text-white">ACTIVE</h1>
          </Link>
          <Link
            to="/completedTodos"
            onClick={() => handleTodosCompleted()}
            className="bg-slate-500 rounded-xl "
          >
            <h1 className="px-4 py-1 text-xs font-bold text-white">
              COMPLETED
            </h1>
          </Link>
        </div>
      </div>

      <TodoList />
    </>
  );
}

export default ActiveTodos;
