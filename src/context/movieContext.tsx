import { createContext, ReactNode, useEffect, useState } from "react";
import { Genre, Movie, MovieInfo } from "../@types/movies";
import { getListGenres, getListMovies, searchMovies } from "../services/movie";

interface ContextProps {
  type: "search" | "general";
  movies: MovieInfo | undefined;
  moviesList: Movie[];
  listGenres: Genre | undefined;
  search: (query: string, page: number) => void;
  getMovies: (page: number) => void;
  getGenres: () => void;
  loading: boolean;
  querySearch: string;
}

interface StoreProviderContext {
  children: ReactNode;
}

export const MovieContext = createContext<ContextProps>({} as any);

export function MovieProvider({ children }: StoreProviderContext) {
  const [movies, setMovies] = useState<MovieInfo>();
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [listGenres, setListGenres] = useState<Genre>();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<"search" | "general">("general");
  const [querySearch, SetQuerySearch] = useState('');

  const getMovies = async (page: number) => {
    try {
      setType("general");
      setLoading(true);
      const { data } = await getListMovies(page);
      setMovies(data);
      setMoviesList([
        ...data.results.map((value) => ({
          ...value,
          price: Math.floor(100 * Math.random() + 1),
        })),
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getGenres = async () => {
    try {
      setLoading(true);
      const { data } = await getListGenres();
      setListGenres(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const search = async (query: string, page: number) => {
    try {
      SetQuerySearch(query);
      setType("search");
      setLoading(true);
      const { data } = await searchMovies(query, page);
      setMovies(data);
      setMoviesList([
        ...data.results.map((value) => ({
          ...value,
          price: Math.floor(100 * Math.random() + 1),
        })),
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        getMovies,
        listGenres,
        movies,
        moviesList,
        search,
        loading,
        type,
        querySearch,
        getGenres,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
