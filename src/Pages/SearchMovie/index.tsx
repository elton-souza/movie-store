import { useEffect, useState } from "react";
import { MovieInfo, Genre, Movie } from "../../@types/movies";
import { getListGenres, searchMovies } from "../../services/movie";
import { Main, BoxPaginate } from "../Home/styles";
import Paginate from "../../components/Pagination";
import { Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import MovieList from "../../components/MovieList";

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
      console.log(data);
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

  useEffect(() => {
    search(pageActive);
    getGenres();
  }, [pageActive, query]);

  return (
    <>
      <Main>
        {loading ? (
          <Loader active inline="centered" style={{ marginTop: 100 }} />
        ) : (
          <>
            {movies && listGenres && (
              <>
                <MovieList moviesList={moviesList} listGenres={listGenres} />
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
