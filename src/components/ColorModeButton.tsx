import { HStack, useColorMode, Button, Text } from "@chakra-ui/react";

export const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode}>
        切换到 {colorMode === "light" ? "黑夜" : "白天"}
      </Button>
      <Text whiteSpace="nowrap" color="white">
        黑夜模式
      </Text>
    </HStack>
  );
};
