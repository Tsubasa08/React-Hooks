import React, { useState, useEffect } from 'react';

export default function UseState() {
  const [incrementCount, setIncrementCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(100);

  useEffect(() => {
    setDecrementCount(decrementCount - 1);
  }, [incrementCount]);

  return (
    <div>
      <h2>Hooks</h2>
      <p>incrementCount： {incrementCount}</p>
      <p>decrementCount {decrementCount}</p>
      <button onClick={() => setIncrementCount(incrementCount + 1)}>
        Click me
      </button>
      <div id="hooks"></div>
    </div>
  );
}
