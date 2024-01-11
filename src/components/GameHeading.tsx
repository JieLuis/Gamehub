import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../service/store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genre?.id);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platform?.id);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
