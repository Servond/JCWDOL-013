import About from "./pages/about";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { H1, H2 } from "./style";

const StyledH1 = styled.h1`
  font-size: 20px;
`;

const Size = styled.h1;

function App() {
  return (
    <>
      <div>
        <H1>First React Project</H1>
        <Routes>
          <Route
            path="/"
            element={
              <Home name="Budi" email="budi@gmail.com" StyledH1={StyledH1} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
