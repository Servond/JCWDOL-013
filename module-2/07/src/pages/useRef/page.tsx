import { useEffect, useRef } from "react";
import Example from "./example";

export default function ComponentUseRef() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  //   useEffect(() => {
  //     inputRef.current?.focus();
  //   });

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
      <Example />
    </div>
  );
}
