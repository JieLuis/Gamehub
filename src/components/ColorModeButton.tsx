import { HStack, useColorMode, Button, Text } from "@chakra-ui/react";

export const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Text color="white">Dark Mode</Text>
    </HStack>
  );
};
