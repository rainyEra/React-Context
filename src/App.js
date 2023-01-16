import React from 'react';
import './style.css';
import { useStateContext } from './Conx';
export default function App() {
  const { num, setNum } = useStateContext();
  function asd() {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  }
  return (
    <div>
      <p onClick={() => asd()}>Clock</p>
      {num}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
