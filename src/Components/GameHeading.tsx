import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../Hooks/useGenres";
import usePlatform from "../Hooks/usePlatform";
import useGenre from "../Hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre();
  const platform = usePlatform();

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
