import { useEffect, useState } from "react";
import { MovieInfo, Genre, Movie } from "../../@types/movies";
import { getListGenres, getListMovies } from "../../services/movie";
import MovieCard from "../../components/MovieCard";
import { MoviesList, Main, BoxPaginate } from "./styles";
import Paginate from "../../components/Pagination";
import { Loader } from "semantic-ui-react";

export default function Home() {
  const [movies, setMovies] = useState<MovieInfo>();
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [listGenres, setListGenres] = useState<Genre>();
  const [pageActive, setPageActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const getMovies = async () => {
    try {
      setLoading(true);
      const { data } = await getListMovies(pageActive);
      setMovies(data);
      setMoviesList((state) => [
        ...state,
        ...data.results.map((value) => ({
          ...value,
          price: Math.floor(100 * Math.random() + 1),
        })),
      ]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getGenres = async () => {
    try {
      setLoading(true);
      const { data } = await getListGenres();
      setListGenres(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePageActive = (value: any) => {
    setPageActive(value);
  };

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  useEffect(() => {
    if (pageActive) {
      getMovies();
    }
  }, [pageActive]);

  return (
    <>
      <Main>
        {loading ? (
          <Loader active inline="centered" />
        ) : (
          <>
            {movies && listGenres && (
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
