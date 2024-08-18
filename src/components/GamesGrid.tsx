import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GamesGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);

  const games = data;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text color="tomato">{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
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
  );
}

export default GamesGrid;
