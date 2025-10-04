import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#242424");

  return (
    <div className="main-container" style={{ backgroundColor: `${bgColor}` }}>
      <div className="color-box">
        <div className="red" onClick={() => setBgColor("red")}>
          Red
        </div>
        <div className="green" onClick={() => setBgColor("green")}>
          Green
        </div>
        <div className="blue" onClick={() => setBgColor("blue")}>
          Blue
        </div>
        <div className="orange" onClick={() => setBgColor("orange")}>
          Orange
        </div>
        <div className="violet" onClick={() => setBgColor("violet")}>
          Violet
        </div>
        <div className="reset" onClick={() => setBgColor("#242424")}>
          Reset
        </div>
      </div>
    </div>
  );
}

export default App;
