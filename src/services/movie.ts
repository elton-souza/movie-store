import axios, { AxiosResponse } from "axios";
import { Genre, MovieInfo } from "../@types/movies";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: import.meta.env.VITE_API_KEY_V3,
    language: "pt-BR",
  },
});

export const getListMovies = (
  page: number
): Promise<AxiosResponse<MovieInfo>> =>
  movieApi.get("/movie/top_rated", {
    params: {
      page,
    },
  });

export const getListGenres = (): Promise<AxiosResponse<Genre>> =>
  movieApi.get("/genre/movie/list");

export const searchMovies = (search: string, page: number): Promise<AxiosResponse<MovieInfo>> =>
  movieApi.get("/search/movie", {
    params: {
      query: search,
      page,
    },
  });
