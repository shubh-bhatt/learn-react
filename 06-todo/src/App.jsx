import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Read 10 pages", isCompleted: false },
  ]);

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

  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div>
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

      <hr />
      <div>
        <h3>Pending Todos</h3>
        <ul>{renderTodos}</ul>
      </div>
    </div>
  );
};

export default App;
