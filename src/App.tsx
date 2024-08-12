import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/navbar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav" m="20px">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <Box m="20px">
        <GamesGrid></GamesGrid>
      </Box>
    </Grid>
  );
}

export default App;
