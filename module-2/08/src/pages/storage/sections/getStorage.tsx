import { Box, Heading } from "@chakra-ui/react";

export default function GetStorage() {
  const loc = localStorage.getItem("loc");
  const ses = sessionStorage.getItem("ses");

  return (
    <Box>
      <Heading>Local Storage: {loc}</Heading>
      <Heading>Session Storage: {ses}</Heading>
    </Box>
  );
}
