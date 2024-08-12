import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";


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
}



const useGames = () => useData<Game>("/games");
   

    


export default useGames;