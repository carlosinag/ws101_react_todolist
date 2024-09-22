import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setWarning("Please enter a task before adding.");
    } else {
      props.addTodo(input);
      setInput("");
      setWarning("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add your task..."
      />
      <button type="submit" className="todo-button">Add to list</button>
      {warning && <p className="warning-text">{warning}</p>}
    </form>
  );
}
export default TodoForm;