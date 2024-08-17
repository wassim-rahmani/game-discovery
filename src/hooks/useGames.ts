import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: string,
  name: string,
  background_image: string,
  platforms: {platform: Platform}[], 
  metacritic: number;
  genre: Genre;
}



const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games" , {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}},  [selectedGenre?.id, selectedPlatform?.id]);
   

    


export default useGames;