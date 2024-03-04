import { useState } from "react";

function ComponentUseState() {
  const [count, setCount] = useState<number>(0);
  //   const [name, setName] = useState<string>("");

  return (
    <div>
      <h2>You click {count} times</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default ComponentUseState;
