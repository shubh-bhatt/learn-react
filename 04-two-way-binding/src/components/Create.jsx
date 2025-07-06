import { useState } from "react";

const Create = (props) => {
  console.log(props);
  
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState(18);

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
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="Age"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
