import { useContext } from "react";
import UserContext from "./context";

export default function Component2() {
  const user = useContext<string>(UserContext);

  return (
    <div>
      <h1>Component 2</h1>
      <h1>Hello {user}!</h1>
    </div>
  );
}
