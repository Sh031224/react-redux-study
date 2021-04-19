import React from "react";
import useCounter from "../../hooks/useCounter";

const Counter = () => {
  const { count, incrementCount, decrementCount } = useCounter();

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </>
  );
};

export default Counter;
