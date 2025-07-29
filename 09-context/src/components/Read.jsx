import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Read = () => {
  const [todos, setTodos] = useContext(todoContext);

  const deleteHandler = (id) => {
    const deletedtodo = todos.filter((todo) => todo.id != id);
    setTodos(deletedtodo);
    toast.error("Todo Deleted!");
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="mb-2 flex justify-between items-center p-3 bg-gray-900 rounded "
      >
        <span className="text-xl font-thin">{todo.title}</span>
        <button
          className="text-sm font-thin text-red-400"
          onClick={() => {
            deleteHandler(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className="w-[40%] p-10">
      <h3 className="mb-10 text-5xl font-thin">
        <span className="text-yellow-400">Pending</span>Todos
      </h3>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
