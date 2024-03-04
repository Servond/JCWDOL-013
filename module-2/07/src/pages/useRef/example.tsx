import { useEffect, useRef, useState } from "react";

export default function Example() {
  const [name, setName] = useState<string>("");
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Your Name: {name}</h2>
      <h2>Render Count: {renderCount.current} times</h2>
    </div>
  );
}
