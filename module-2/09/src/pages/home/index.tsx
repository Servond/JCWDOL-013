import { Container, Box } from "@chakra-ui/react";
import CustomTable from "./component/customTable";

export default function Home() {
  return (
    <Box
      sx={{
        marginTop: "64px",
      }}
    >
      <Container>
        <CustomTable />
        <img src="/scen.jpg" alt="gambar" />
      </Container>
    </Box>
  );
}