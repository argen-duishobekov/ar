import React, { useState } from "react";

export default function Counter() {
  const [Like, setLike] = useState(0);
  const [Count, setCount] = useState(0)

  const Dec = () => {
    setLike(Like + 1);
  };
  const Inc = () => {
    if (Like > 0) {
      setLike(Like - 1);
    }
  };

  const Rec = () => {
    setLike(0);
  };


  return (
    <div>
      <h1>Counter</h1>
      <h2>{Like}</h2>
      <button onClick={Dec}>+</button>
      <button onClick={Inc}>-</button>
      <button onClick={Rec}>Rec</button>
    </div>
  );
}
