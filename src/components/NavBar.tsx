import logo from "../assets/icon.webp";
import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ColorModeButton";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
};
