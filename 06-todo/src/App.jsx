import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Read 10 pages", isCompleted: false },
  ]);

  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter the task"
        />

        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
