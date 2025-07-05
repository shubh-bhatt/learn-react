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

  const [fullname, setFullname] = useState("");
  const [age, setage] = useState(18);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullname, age }; // send to (api - backend - database)
    console.log(newuser);
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          placeholder="Your Name"
        />
        <input
          type="number"
          onChange={(e) => setage(e.target.value)}
          value={age}
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
      <hr />
      <h1>User Info</h1>
      <ol>{renderuser}</ol>
    </div>
  );
};

export default App;
