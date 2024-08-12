import { Box, Text } from "@chakra-ui/react";
import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

function GenreList() {
  const { data, error, isLoading } = useGenres();

  const genres = data;

  return (
    <Box>
      {error && <Text color="tomato">{error}</Text>}

      <ul>
        {genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul>
    </Box>
  );
}

export default GenreList;
