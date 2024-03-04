interface AboutInterface {
  name: string;
}

function About(props: AboutInterface) {
  return (
    <div>
      <h1>Ini adalah halaman about, welcome {props.name}</h1>
    </div>
  );
}

export default About;
