import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import { ChatBox } from "./components/ChatBox";

function App() {
  return (
    <>
      <h2>Hello</h2>
      <ChakraProvider>
        <Box p={5}>
          <Heading as="h1" mb={6}>
            Reacl time Chat Application
          </Heading>
          <ChatBox />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
