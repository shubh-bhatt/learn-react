const Read = (props) => {
  const todos = props.todos;
  
  const renderTodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div>
      <hr />
      <div>
        <h3>Pending Todos</h3>
        <ul>{renderTodos}</ul>
      </div>
    </div>
  );
};

export default Read;
