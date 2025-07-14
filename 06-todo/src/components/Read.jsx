import { Fragment } from "react";

const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

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

  const deleteHandler = (id) => {
    const deletedtodo = todos.filter((todo) => todo.id != id);
    setTodos(deletedtodo);
  };

  return (
    <Fragment>
      <hr />
      <div>
        <h3>Pending Todos</h3>
        <ul>{renderTodos}</ul>
      </div>
    </Fragment>
  );
};

export default Read;
