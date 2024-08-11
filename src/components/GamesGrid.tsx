import { Text } from "@chakra-ui/react";
import useGames from "../hooks/usegames";

function GamesGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="tomato">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GamesGrid;
