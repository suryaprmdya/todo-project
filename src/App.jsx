import React from "react";
import TodoInput from "./components/todoInput";
import { Routes, Route } from "react-router-dom";
import AllTodos from "./pages/allTodos";
import ActiveTodos from "./pages/activeTodos";
import CompletedTodos from "./pages/completedTodos";

function App() {
  return (
    <>
      <div className="text-center mt-28">
        <h1 className="text-3xl font-extrabold tracking-wide text-neutral-700">
          What's the plan for today?
        </h1>
      </div>
      <TodoInput />
      <Routes>
        <Route path="/" element={<AllTodos />} />
        <Route path="/activeTodos" element={<ActiveTodos />} />
        <Route path="/completedTodos" element={<CompletedTodos />} />
      </Routes>
    </>
  );
}

export default App;
