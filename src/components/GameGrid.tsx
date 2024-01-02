import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding="10px">
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        {error && <Text>{error.message}</Text>}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
