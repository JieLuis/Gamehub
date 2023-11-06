import logo from "../assets/icon.webp";
import { HStack, Image, Text } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>some magic</Text>
    </HStack>
  );
};
