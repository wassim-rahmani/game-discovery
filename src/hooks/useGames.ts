
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

export interface Game {
  id: string,
  name: string,
  background_image: string,
  platforms: {platform: Platform}[], 
  metacritic: number;
  genre: Genre;
}



const useGames = (gameQuery: GameQuery) => useData<Game>("/games" , {params: 
  {genres: gameQuery.genre?.id,
     platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
    search: gameQuery.searchText}},  
     [gameQuery]);
   

    


export default useGames;