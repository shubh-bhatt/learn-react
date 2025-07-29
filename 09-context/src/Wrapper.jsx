import { createContext, useState } from "react";

export const todoContext = createContext(null);

const Wrapper = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Read 10 pages", isCompleted: false },
  ]);

  return (
    <todoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
