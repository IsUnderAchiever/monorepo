import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((c) => c + 1);
  const label = `Count is ${counter}`;
  return { label, increment };
}
