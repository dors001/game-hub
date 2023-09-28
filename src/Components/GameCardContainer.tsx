import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow={"hidden"}
      scale={1.5}
      _hover={{
        transition: "transform 0.2s ease-out",
        transform: "scale(1.05)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
