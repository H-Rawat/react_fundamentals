import React from "react";
import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["mehul", "john", "hello"]);

  function createTodo() {
    setTodos((oldTodos) => {
      return [...oldTodos, task];
    });
    setTask("");
  }

  function tryToCheckForTheEnterKey(e) {
    if (e.keyCode === 13) {
      createTodo();
    }
  }

  return (
    <>
      <h1>TODO APP</h1>
      <input
        type="text"
        onKeyDown={tryToCheckForTheEnterKey}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={createTodo}>Add this task to the TODO list</button>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default Todo;
