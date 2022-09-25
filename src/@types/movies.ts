export interface MovieInfo {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  release_date: string;
  genre_ids: number[];
  price: number;
}

export interface Genre {
  genres: {
    id:number;
    name: string;
  }[];
}