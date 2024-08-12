import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


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

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  
    useEffect(() => {
      setIsLoading(true);
        console.log("Loading: " + isLoading);
        const controller = new AbortController();
        
      apiClient
        .get<FetchGamesResponse>("/games", {signal:controller.signal})
        .then((res) => {
          
          setGames(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          
            if(err instanceof CanceledError) return;
            setError(err.message)
            setIsLoading(false);
            
          });
           
              
            

        return () => controller.abort();
    },[]);


    return {games, error, isLoading};
}

export default useGames;