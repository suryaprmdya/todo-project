import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../redux/actions/todoAction";

function TodoInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let newTodo = {
      value: input,
      isFinished: false,
    };
    dispatch(addTodo(newTodo));
    setInput("")
  };

  return (
    <div className="flex flex-row justify-center mt-5">
      <form action="" className="w-full sm:w-1/3 justify-center flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah To Do Disini"
          className="border-2 pl-4 py-2 w-80 rounded-md"
        />
        <button
          onClick={handleClick}
          className="px-4 ml-4 rounded-md bg-indigo-400 text-white font-medium"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
