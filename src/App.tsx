import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // <1024px
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          aside
        </GridItem>
      </Show>
      <GridItem area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
