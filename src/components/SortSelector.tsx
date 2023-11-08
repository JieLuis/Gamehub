import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const SortSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={BsChevronDown}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
        <MenuItem>6</MenuItem>
        <MenuItem>7</MenuItem>
        <MenuItem>8</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
