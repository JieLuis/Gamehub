import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCropedImageUrl from "../service/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={5}>
          <PlatformIconList
            platforms={
              game.parent_platforms
                ? game.parent_platforms.map((p) => p.platform)
                : []
            }
          />
          <HStack>
            <Emoji rating={game.rating_top} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};
