import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      str += "0123456789";
    }

    if (characters) {
      str += "~!@#$%^&*()?";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="box-container">
      <form>
        <input type="text" placeholder="Password" value={password} readOnly />
        <button type="button" onClick={copyToClipboard}>
          Copy
        </button>
      </form>
      <div>
        <div>
          <input
            id="range"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="range">Length: {length}</label>
        </div>
        <div>
          <input
            id="numbers"
            type="checkbox"
            defaultChecked={numbers}
            onChange={() => setNumbers((prev) => !prev)}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div>
          <input
            id="characters"
            type="checkbox"
            defaultChecked={characters}
            onChange={() => setCharacters((prev) => !prev)}
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
