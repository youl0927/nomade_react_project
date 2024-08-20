import Button from "./Button";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick =()=> setValue((e)=> e +1);
  console.log("i run all the time");

  const iRunOnlyOnce =()=>{
    console.log("i run only once");
  }

  useEffect(()=>{
    console.log("call he api...")
  },[]);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
