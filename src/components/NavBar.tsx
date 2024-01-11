import logo from "../assets/icon.webp";
import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ColorModeButton";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};
