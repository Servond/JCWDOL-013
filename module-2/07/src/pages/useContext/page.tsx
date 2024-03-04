import { useState } from "react";
import UserContext from "./context";
import Component1 from "./component1";

// const UserContext = createContext("");

export default function ComponentUseContext() {
  const [user, setUser] = useState<string>("Budi Do");

  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>Hello {user}!</h1>
        <Component1 />
      </UserContext.Provider>
    </div>
  );
}

// function Component1() {
//   const user = useContext<string>(UserContext);
//   return (
//     <div>
//       <h1>Component 1</h1>
//       <h1>Hello {user}!</h1>
//       <Component2 />
//     </div>
//   );
// }

// function Component2() {
//   const user = useContext<string>(UserContext);
//   return (
//     <div>
//       <h1>Component 2</h1>
//       <h1>Hello {user}!</h1>
//     </div>
//   );
// }
