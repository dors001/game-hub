import { Grid, GridItem, Img, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../Hooks/useScreenshots";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenshots(slug);

  if (isLoading) return null;
  if (error) throw error;

  return data ? (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {data?.results.map((screenshot) => (
          <GridItem>
            <Img key={screenshot.id} padding={2} src={screenshot.image} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  ) : null;
};

export default GameScreenshots;
