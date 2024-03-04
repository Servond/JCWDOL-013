import { useState, useEffect } from "react";

export default function ComponentUseEffect() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [task, setTask] = useState<string>("");

  useEffect(() => {
    document.title = `you click ${count} times`;
    console.log("masuk");
  }, [count, name]);

  return (
    <div>
      <h2>You click {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Your name is {name}</h2>
      <button onClick={() => setName("Budi")}>Click Name</button>
    </div>
  );
}
