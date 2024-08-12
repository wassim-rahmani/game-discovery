import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/usegames";
import GameCard from "./GameCard";

function GamesGrid() {
  const { games, error } = useGames();

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
        {games.map((game) => (
          <GridItem>
            <GameCard game={game}></GameCard>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GamesGrid;
