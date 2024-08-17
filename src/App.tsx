import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  const onSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
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
            selectedGenre={selectedGenre}
            handleSelectGenre={handleSelectGenre}
          />
        </GridItem>
      </Show>

      <Box m="20px">
        <Box m="20px">
          <PlatformSelector
            onSelectPlatform={onSelectPlatform}
            selectedPlatform={selectedPlatform}
          ></PlatformSelector>
        </Box>

        <Box>
          <GamesGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          ></GamesGrid>
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
