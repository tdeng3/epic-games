import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <HStack>
          <NavBar />
        </HStack>
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside">Aside</GridItem>
      </Stack>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
