import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevState) => prevState + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <h3>Вы нажали число {counter} раз</h3>
      <Button onClick={increment} className="btn btn-success">
        +
      </Button>
      <button onClick={decrement} className="btn btn-danger">
        -
      </button>
    </div>
  );
}
export default Counter;
