
import useData from "./useData";
import genres from "../genres"

export interface Genre{
  id: string,
  name: string,
  image_background: string;
  
}

 

//const useGenres = () =>  useData<Genre>("/genres")

const useGenres = () =>  ({data: genres, isLoading: false,error: null})

export default useGenres;