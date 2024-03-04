import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home name="Budi" email="budi@gmail.com" />} />
        <Route path="/about" element={<About name="Budi" />} />
      </Routes>
    </>
  );
}

export default App;
