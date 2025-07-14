import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newtodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    // const temptodos = [...todos];
    // temptodos.push(newtodo);
    // setTodos(temptodos);

    // (works same as the below line)

    setTodos([...todos, newtodo]);

    setTitle("");
  };

  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter the task"
        />

        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </>
  );
};

export default Create;
