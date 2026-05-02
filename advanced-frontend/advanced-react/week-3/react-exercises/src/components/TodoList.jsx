// Create a new component called TodoList

// Use the useState hook to manage an array of todo items

// Implement a function to add a new todo item to the array

// Implement a function to remove a todo item from the array

// Render a list of todo items using the .map method, ensuring each item has a unique key prop

// Render an input field to add new todos and buttons/functionality to remove todos

import { useState } from "react";

export function TodoList() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {
    if (inputValue === "") {
      alert("Please inter a todo item");
      return;
    }
    const toDoItem = {
      id: Date.now(),
      text: inputValue,
    };
    setTodo([...todo, toDoItem]);
    setInputValue("");
  };
  const removeTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };
  const handleKey = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };
  return (
    <>
      <h3>ToDo List</h3>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKey}
          placeholder="Add a new todo..."
        />{" "}
        <br /> <br />
        <button onClick={addTodo}>Add new item</button>
      </div>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleComplete(item.id)}
            >
              {item.text}
            </span>{" "}
            <br />
            <br />
            <button onClick={() => removeTodo(item.id)}>Delete Item</button>
          </li>
        ))}
      </ul>
      {todo.length === 0 && <p>No Todo List yet, try to add new!</p>}
    </>
  );
}
