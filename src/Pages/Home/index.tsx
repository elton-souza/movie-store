import { useEffect, useState } from "react";
import { MovieInfo, Genre, Movie } from "../../@types/movies";
import { getListGenres, getListMovies } from "../../services/movie";
import MovieCard from "../../components/MovieList";
import { Main, BoxPaginate } from "./styles";
import Paginate from "../../components/Pagination";
import { Loader } from "semantic-ui-react";
import MovieList from "../../components/MovieList";

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
  
  const handleChangePageActive = (value: any) => {
    setPageActive(value);
  };

  useEffect(() => {
    if (pageActive) {
      getMovies();
    }
  }, [pageActive]);

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  return (
    <>
    <Main>
      {loading ? (
        <Loader active inline="centered" style={{ marginTop: 100 }} />
      ) : (
        <>
          {movies && listGenres && (
            <>
              {moviesList.length > 0 && (
                <MovieList moviesList={moviesList} listGenres={listGenres} />
              )}
              <BoxPaginate>
                <Paginate
                  activePage={pageActive}
                  totalPages={movies.total_pages}
                  setActivePage={setPageActive}
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
