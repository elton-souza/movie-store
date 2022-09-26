import { useEffect, useState, useContext } from "react";
import { MovieInfo, Genre, Movie } from "../../@types/movies";
import { getListGenres, getListMovies } from "../../services/movie";
import MovieCard from "../../components/MovieCard";
import { MoviesList, Main, BoxPaginate } from "./styles";
import Paginate from "../../components/Pagination";
import { Loader } from "semantic-ui-react";
import { MovieContext } from "../../context/movieContext";

export default function Home() {
  const {
    movies,
    moviesList,
    listGenres,
    getMovies,
    loading,
    type,
    search,
    querySearch,
    getGenres
  } = useContext(MovieContext);
  const [pageActive, setPageActive] = useState(1);

  const handleChangePageActive = (value: any) => {
    setPageActive(value);
  };

  useEffect(() => {
    if (pageActive) {
      switch (type) {
        case "general":
          getMovies(pageActive);
          break;
        case "search":
          search(querySearch, pageActive);
      }
    }
  }, [pageActive]);

  useEffect(() => {
    if(type === "general") {
      getMovies(1)
      getGenres();
    };
  }, []);

  return (
    <>
      <Main>
        {loading ? (
          <Loader active inline="centered" style={{ marginTop: 100 }} />
        ) : (
          <>
            {movies && listGenres && moviesList && (
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
