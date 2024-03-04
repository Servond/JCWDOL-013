import { useState, useMemo } from "react";

export default function ComponentUseMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => setNumber(number + 1);
  const incrementCount = () => setCount(number + 1);

  const isNumberEven = useMemo(() => {
    let i: number = 0;
    while (i < 2000000000) {
      i++;
    }

    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <button onClick={incrementNumber}>number: {number}</button>
      <h2>{isNumberEven ? "even" : "odd"}</h2>
      <button onClick={incrementCount}>count: {count}</button>
    </div>
  );
}
