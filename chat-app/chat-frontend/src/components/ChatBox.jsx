import { Avatar, Box, Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

export const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let storeUserId = sessionStorage.getItem("userId");
    if (!storeUserId) {
      storeUserId = Math.random().toString(36).substring(7);
      sessionStorage.setItem("userId", storeUserId);
    }
    setUserId(storeUserId);

    socket.on("receiveMessage", (message) => {
      setMessages((prevMsg) => [...prevMsg, message]);
    });

    return socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const message = {
        userId,
        text: input,
      };

      socket.emit("sendMessage", message);

      setInput("");
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box h="400px" p={4} borderWidth={1} borderRadius="1g" overflowY="auto">
        {messages.map((msg, index) => {
          <HStack
            key={index}
            justify={msg.userId === userId ? "flex-start" : "flex-end"}
          >
            {msg.userId === userId && <Avatar name="Me" />}
            <Box
              bg={msg.userId === userId ? "blue.100" : "green.100"}
              p={3}
              borderRadius="1g"
              maxW="70%"
            >
              <Text>{msg.text}</Text>
            </Box>
          </HStack>;
        })}
      </Box>
      <HStack>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage} colorScheme="teal">
          Send
        </Button>
      </HStack>
    </VStack>
  );
};
