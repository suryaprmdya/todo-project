import React from "react";

function TodoInput() {
  return (
    <div className="flex flex-row justify-center mt-5">
      <form action="" className="w-full sm:w-1/3 justify-center flex">
        <input
          type="text"
          placeholder="Tambah To Do Disini"
          className="border-2 pl-4 py-2 w-80 rounded-md"
        />
        <button className="px-4 ml-4 rounded-md bg-indigo-400 text-white font-medium">Add</button>
      </form>
    </div>
  );
}

export default TodoInput;
