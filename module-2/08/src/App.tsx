import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Storage from "./pages/storage";
import Context from "./pages/context";
import Counter from "./pages/counter";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/storage" element={<Storage />} />
        <Route path="/context" element={<Context />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Box>
  );
}

export default App;
