import React from "react";
import TodoHeader from "./components/todoHeader";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import TodoFilter from "./components/todoFilter";

function App() {
  return (
    <>
      <TodoHeader />
      <TodoInput />
      <TodoFilter />
      <TodoList />
    </>
  );
}

export default App;
