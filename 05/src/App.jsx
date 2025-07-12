import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Read 10 pages", isCompleted: false },
  ]);

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <h1>Create Tasks</h1>
      <form>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Enter the task"
        />
        <br />
        <br />
        <input
          checked={completed}
          onChange={(e) => {
            setCompleted(e.target.checked);
          }}
          type="checkbox"
        />
        Completed
        <br />
        <br />
        <input
          value="male"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          checked={gender == "male" && true}
          type="radio"
        />
        Male
        <input
          value="female"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          checked={gender == "female" && true}
          type="radio"
        />
        Female
        <br />
        <br />
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        >
          <option value="delhi">Delhi</option>
          <option value="dehradun">Dehradun</option>
          <option value="gurugram">Gurugram</option>
        </select>
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default App;
