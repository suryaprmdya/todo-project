import React from "react";

function TodoFilter() {
  return (
    <div className="flex flex-row gap-6 justify-center mt-6 mx-4 sm:mx-0">
      <div className="w-full sm:w-1/3 flex flex-row gap-5">
        <button className="bg-slate-500 rounded-xl focus:bg-teal-400">
          <h1 className="px-4 py-1 text-xs font-bold text-white">
            ALL
          </h1>
        </button>
        <button className="bg-slate-500 rounded-xl">
          <h1 className="px-4 py-1 text-xs font-bold text-white">
            ACTIVE
          </h1>
        </button>
        <button className="bg-slate-500 rounded-xl">
          <h1 className="px-4 py-1 text-xs font-bold text-white">
            COMPLETED
          </h1>
        </button>
      </div>
    </div>
  );
}

export default TodoFilter;
