import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const handleSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
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
        <PlatformSelector></PlatformSelector>
        <GamesGrid selectedGenre={selectedGenre}></GamesGrid>
      </Box>
    </Grid>
  );
}

export default App;
