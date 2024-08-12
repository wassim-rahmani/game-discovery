import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useEffect } from "react";
import GameCardContainer from "./GameCardContainer";

function GamesGrid() {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {games.map((game) => (
          <GridItem key={game.id}>
            <GameCardContainer>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GamesGrid;
