import React from "react";

function TodoFilter() {
  return (
    <div className="flex flex-row gap-6 justify-center mt-6">
      <div className="w-1/3 flex flex-row gap-5">
        <h1 className="bg-slate-500 px-4 py-1 rounded-xl text-xs font-medium text-white">ALL</h1>
        <h1 className="bg-slate-500 px-4 py-1 rounded-xl text-xs font-medium text-white">ACTIVE</h1>
        <h1 className="bg-slate-500 px-4 py-1 rounded-xl text-xs font-medium text-white">COMPLETED</h1>
      </div>
    </div>
  );
}

export default TodoFilter;
