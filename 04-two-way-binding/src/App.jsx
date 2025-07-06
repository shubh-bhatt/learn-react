import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Shubham", age: 23 },
    { name: "Ankit", age: 30 },
    { name: "Madhav", age: 33 },
  ]);

  return (
    <div>
      <Create />
      <hr />
      <Read users={users} setusers={setUsers} />
    </div>
  );
};

export default App;
