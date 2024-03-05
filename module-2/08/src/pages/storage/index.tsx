import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import GetStorage from "./sections/getStorage";
import SetStorage from "./sections/setStorage";
export default function Storage() {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const clearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <Box>
      <Box as="span">{count}</Box>
      <GetStorage />
      <SetStorage />
      <Box>
        <Button onClick={clearStorage}>Clear Storage</Button>
      </Box>
    </Box>
  );
}
