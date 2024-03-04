import { useState } from "react";

export default function useCounter(val: number, step: number) {
  const [count, setCount] = useState<number>(val);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    setCount(count - step);
  }

  return [count, increment, decrement];
}
