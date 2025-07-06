import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Shubham", age: 23 },
    { name: "Ankit", age: 30 },
    { name: "Madhav", age: 33 },
  ]);

  let renderuser = users.map((user, index) => {
    return <li key={index}>{user.name}</li>;
  });

  return (
    <div>
      <h1>User Info</h1>
      <hr />
      <ol>{renderuser}</ol>
    </div>
  );
};

export default App;
