import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function SetStorage() {
  const [locStorage, setLocStorage] = useState<string>("");
  const [sesStorage, setSesStorage] = useState<string>("");

  const handleSubmit = () => {
    localStorage.setItem("loc", locStorage);
    sessionStorage.setItem("ses", sesStorage);
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Local Storage</FormLabel>
          <Input type="text" onChange={(e) => setLocStorage(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Session Storage</FormLabel>
          <Input type="text" onChange={(e) => setSesStorage(e.target.value)} />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
