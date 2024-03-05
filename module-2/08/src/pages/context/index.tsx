import { Box, Button, FormControl, Input } from "@chakra-ui/react";
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext("");

export default function Context() {
  const [theme, setTheme] = useState<string>("light");
  console.log(theme);
  return (
    <ThemeContext.Provider value={theme}>
      <Box>
        <Form />
        <Button
          onClick={() => {
            setTheme("light");
          }}
        >
          Set Theme to Light
        </Button>
      </Box>
    </ThemeContext.Provider>
  );
}

function Form() {
  const theme = useContext(ThemeContext);
  return (
    <form className={theme}>
      <FormControl>
        <Input type="text" name="name" />
        <CustomButton />
      </FormControl>
    </form>
  );
}

function CustomButton() {
  const theme = useContext(ThemeContext);

  return (
    <Button className={theme} type="submit">
      Submit
    </Button>
  );
}
