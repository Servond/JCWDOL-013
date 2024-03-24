import { useState } from "react";

interface IProps {
  theme: string;
}

export default function Context() {
  const [theme, setTheme] = useState<string>("light");
  return (
    <div>
      <Form theme={theme} />
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Set Theme to Light
      </button>
    </div>
  );
}

function Form(props: IProps) {
  return (
    <form className={props.theme}>
      <div>
        <input type="text" name="name" />
        <CustomButton theme={props.theme} />
      </div>
    </form>
  );
}

function CustomButton(props: IProps) {
  return (
    <button className={props.theme} type="submit">
      Submit
    </button>
  );
}
