import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Manish", age: 22 },
    { name: "Harsh", age: 26 },
  ]);

  return (
    <div>
      <Create />
      <Read users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
