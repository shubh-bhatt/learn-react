import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("Shubham");

  let ChangeHandler = () => {
    setUsername((prev) => (prev === "Shubham" ? "Ankit" : "Shubham"));
  };

  return (
    <div>
      <h1>Username: {username}</h1>
      <button onClick={ChangeHandler}>Change Username</button>
    </div>
  );
};

export default App;
