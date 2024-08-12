import {
  Box,
  HStack,
  List,
  ListItem,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

function GenreList() {
  const { data, error, isLoading } = useGenres();

  const genres = data;

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
              <Text fontSize="large">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default GenreList;
