import styled from "styled-components";

// const StyledH1 = styled.h1`
//   color: red;
//   font-size: 32px;
// `;

function Home({ name, email, StyledH1 }) {
  return (
    <div>
      <StyledH1>Ini Home Sections</StyledH1>
      <h2>Hello {name}</h2>
      <h2>Your email is {email}</h2>
    </div>
  );
}

export default Home;
