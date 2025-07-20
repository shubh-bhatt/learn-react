import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const submitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      // title: title,
      isCompleted: false,
    };
  };

  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter the task" />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default Create;
