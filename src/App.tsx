import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <HStack>
          <NavBar />
        </HStack>
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
