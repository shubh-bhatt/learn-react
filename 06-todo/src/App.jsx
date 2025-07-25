import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Read 10 pages", isCompleted: false },
  ]);

  return (
    <div className="text-white flex p-10 w-screen h-screen bg-gray-800">
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
