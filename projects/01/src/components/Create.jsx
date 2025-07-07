import { useState } from "react";

const Create = () => {
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState(18);

  let handleUser = (e) => {
    e.preventDefault();
    const data = { fullname, age };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleUser}>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Your Age"
        />
        <button>Submit</button>
      </form>
      <hr />
    </div>
  );
};

export default Create;
