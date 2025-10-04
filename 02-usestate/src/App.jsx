import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("Shubham");
  const [count, setCount] = useState(10);

  let ChangeHandler = () => {
    setUsername((prev) => (prev === "Shubham" ? "Ankit" : "Shubham"));
  };

  const increaseAge = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decreaseAge = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Username: {username}</h1>
      <button onClick={ChangeHandler}>Change Username</button>
      <h2>Age is: {count}</h2>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
    </div>
  );
};

export default App;
