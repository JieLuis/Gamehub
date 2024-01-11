import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../service/store";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlaftformId = useGameQueryStore(
    (s) => s.gameQuery.platform?.id
  );
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlaftformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={BsChevronDown}>
        {selectedPlatform?.name || "平台"}
      </MenuButton>
      <MenuList>
        {error && error.message}
        {isLoading && <Spinner marginY="15px" />}
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
