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
    <div className="w-[60%] p-10 mx-auto">
      <h1 className="mb-10 text-5xl font-thin">
        Set <span className="text-red-400">Remainder</span> for <br /> Tasks
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="border-b w-full outline-0 text-2xl font-thin p-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter the task"
        />

        <br />
        <br />
        <button className="px-10 py-2 text-xl border rounded mt-5">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
