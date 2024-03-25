import React, { useState } from 'react';
import './Counter.css'

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter >= 5) {
      setCounter(counter + 3);
    } else {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 5) {
      setCounter(counter - 3);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default Counter;
