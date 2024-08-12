import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box height="400px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
