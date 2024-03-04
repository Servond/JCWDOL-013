function About() {
  function popUpSomething(e) {
    alert("SudahDiklik");
  }

  return (
    <div>
      <h1>This is About Section</h1>
      <button onClick={popUpSomething} style={{ backgroundColor: "red" }}>
        Click Me
      </button>
    </div>
  );
}

export default About;
