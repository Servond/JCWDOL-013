import { Box, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counter";

export default function Counter() {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Box as="span">{count}</Box>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </Box>
  );
}
