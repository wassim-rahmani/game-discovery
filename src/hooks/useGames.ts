import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";


export interface Platform {
  id: string,
  name: string,
  slug: string,
  
}

export interface Game {
  id: string,
  name: string,
  background_image: string,
  platforms: {platform: Platform}[], 
  metacritic: number;
  genre: Genre;
}



const useGames = (selectedGenre: Genre | null) => useData<Game>("/games" , {params: {genres: selectedGenre?.id}},  [selectedGenre?.id]);
   

    


export default useGames;