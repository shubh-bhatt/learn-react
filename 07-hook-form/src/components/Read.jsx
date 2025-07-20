import { Fragment } from "react";
import "./Read.css";

const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const deleteHandler = (id) => {
    const deletedtodo = todos.filter((todo) => todo.id != id);
    setTodos(deletedtodo);
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.title} |{" "}
        <span
          onClick={() => {
            deleteHandler(todo.id);
          }}
        >
          Delete
        </span>
      </li>
    );
  });

  return (
    <Fragment>
      <hr />
      <div>
        <h3 className="read_list_heading">Pending Todos</h3>
        <ul>{renderTodos}</ul>
      </div>
    </Fragment>
  );
};

export default Read;
