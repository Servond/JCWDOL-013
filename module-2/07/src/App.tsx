import ComponentUseState from "./pages/useState/page";
import ComponentUseRef from "./pages/useRef/page";
import ComponentUseEffect from "./pages/useEffect/page";
import ComponentUseMemo from "./pages/useMemo/page";
import ComponentUseContext from "./pages/useContext/page";
import ComponentUseCallback from "./pages/useCallback/page";
import ComponentUseReducer from "./pages/useReducer/page";

import useCounter from "./hooks/counter-hooks";

function App() {
  const [count, increment, decrement] = useCounter(0, 2);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {/* <ComponentUseState /> */}
      {/* <ComponentUseEffect /> */}
      {/* <ComponentUseRef /> */}
      {/* <ComponentUseMemo /> */}
      {/* <ComponentUseContext /> */}
      {/* <ComponentUseReducer /> */}
      <ComponentUseCallback />
    </>
  );
}

export default App;
