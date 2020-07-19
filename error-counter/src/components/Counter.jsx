import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(10);

  //   if (count > 0 && count % 5 === 0) {
  //     throw Error("Wonky count!");
  //   }

  const handleChange = () => {
    setCount(prevCount => prevCount + 5);
    setCount(prevCount => prevCount + 5);
    setCount(prevCount => prevCount + 5);
  };

  return (
    <div>
      <h1>Doug's Great Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add One
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 2)}>
        Add Two
      </button>
      <button onClick={handleChange}>My Special Button</button>
    </div>
  );
};
