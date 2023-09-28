import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`, // <1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem paddingX={5} area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
