import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" m="20px">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.genre}
            handleSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>

      <Box m="20px">
        <Box m="20px">
          <PlatformSelector
            onSelectPlatform={onSelectPlatform}
            selectedPlatform={gameQuery.platform}
          ></PlatformSelector>
        </Box>

        <Box>
          <GamesGrid gameQuery={gameQuery}></GamesGrid>
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
