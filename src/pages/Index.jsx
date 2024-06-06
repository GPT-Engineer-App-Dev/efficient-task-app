import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">Todo App</Text>
        <HStack width="100%">
          <Input
            placeholder="Enter a todo item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTodo}>Add</Button>
        </HStack>
        <VStack width="100%" spacing={2} mt={4}>
          {todos.map((todo, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
              <Text>{todo}</Text>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTodo(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;