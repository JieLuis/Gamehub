import logo from "../assets/icon.webp";
import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ColorModeButton";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" marginX={2} />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};
