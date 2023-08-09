import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { reset } = props;
  return <button onClick={reset}>{props.children}</button>;
};

const Application = () => {
  const [name, setName] = useState("");

  // your code here

  const reset = () => {
    console.log("reset");
    setName("");
  };

  return (
    <main>
      <Button reset={reset}>Reset</Button>
      <input
        placeholder="Type Your Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
