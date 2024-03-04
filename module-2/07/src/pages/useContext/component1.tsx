import { useContext } from "react";
import UserContext from "./context";
import Component2 from "./component2";

export default function Component1() {
  const user = useContext<string>(UserContext);
  return (
    <div>
      <h1>Component 1</h1>
      <h1>Hello {user}!</h1>
      <Component2 />
    </div>
  );
}
