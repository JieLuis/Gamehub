import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={20}
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in ",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
