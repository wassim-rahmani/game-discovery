import {
  Box,
  HStack,
  List,
  ListItem,
  Text,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

interface Props {
  handleSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ handleSelectGenre, selectedGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  const genres = data;

  const selectGenre = (genre: Genre) => {
    handleSelectGenre(genre);
  };

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <Box>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
              ></Image>
              <Button
                onClick={() => selectGenre(genre)}
                fontSize="large"
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default GenreList;
