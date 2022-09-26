import { useEffect, useState, useContext } from "react";
import { MovieInfo, Genre, Movie } from "../../@types/movies";
import {
  getListGenres,
  getListMovies,
  searchMovies,
} from "../../services/movie";
import MovieCard from "../../components/MovieCard";
import { MoviesList, Main, BoxPaginate } from "../Home/styles";
import Paginate from "../../components/Pagination";
import { Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";

export default function SearchMovie() {
  const [movies, setMovies] = useState<MovieInfo>();
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [listGenres, setListGenres] = useState<Genre>();
  const [loading, setLoading] = useState(false);
  const [pageActive, setPageActive] = useState(1);
  const { query } = useParams<{ query: string }>();


  const search = async (page: number) => {
    setLoading(true);
    try {
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

  const getGenres = async () => {
    setLoading(true);
    try {
      const { data } = await getListGenres();
      setListGenres(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePageActive = (value: any) => {
    setPageActive(value);
  };

  useEffect(() => {
    search(pageActive);
  }, [pageActive]);

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      <Main>
        {loading ? (
          <Loader active inline="centered" style={{ marginTop: 100 }} />
        ) : (
          <>
            {movies && listGenres && moviesList && pageActive && (
              <>
                <MoviesList>
                  {moviesList.map((movie, index) => (
                    <MovieCard
                      key={index}
                      movie={movie}
                      listGenres={listGenres}
                    />
                  ))}
                </MoviesList>
                <BoxPaginate>
                  <Paginate
                    activePage={pageActive}
                    totalPages={movies.total_pages}
                    setActivePage={handleChangePageActive}
                  />
                </BoxPaginate>
              </>
            )}
          </>
        )}
      </Main>
    </>
  );
}
