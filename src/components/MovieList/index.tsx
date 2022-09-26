import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Genre, Movie } from "../../@types/movies";
import { StoreContext } from "../../context/storeContext";
import {
  BoxIcon,
  ButtonBuy,
  Card,
  ListGenres,
  MovieData,
  MovieGenre,
  MovieImage,
  MoviePrice,
  MovieRated,
  MovieTitle,
  List,
} from "./styles";

interface MovieCardProps {
  moviesList: Movie[];
  listGenres: Genre;
}

export default function MovieList({ moviesList, listGenres }: MovieCardProps) {
  const { setNewItemCart, favorites, setNewFavorites } =
    useContext(StoreContext);

  const isFavorite = (movie: Movie) =>
    favorites.filter((favorite) => favorite?.id === movie?.id)[0];

  const newFavorite = (movie: Movie) => {
    setNewFavorites(movie);
  };

  const MovieListGenres = (genresMovie: number[]) => {
    const newListGenres = genresMovie.map(
      (id) => listGenres.genres.filter((genre) => genre.id === id)[0]
    );
    return (
      <ListGenres>
        {newListGenres.map((genre) => (
          <MovieGenre key={genre.id}>{genre.name}</MovieGenre>
        ))}
      </ListGenres>
    );
  };

  return (
    <List>
      {moviesList.map((movie, index) => (
        <Card>
          <MovieImage
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          >
            <BoxIcon>
              <div
                className="roudend"
                onClick={() => {
                  !isFavorite(movie) && newFavorite(movie);
                }}
              >
                {isFavorite(movie) ? (
                  <BsStarFill size={20} className="iconStar" />
                ) : (
                  <BsStar size={20} className="iconStar" />
                )}
              </div>
            </BoxIcon>
            <MovieData>
              {format(new Date(movie?.release_date), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </MovieData>
          </MovieImage>
          <div className="box-info">
            <MovieTitle>{movie?.title}</MovieTitle>
            <MovieRated>
              <BsStarFill className="icon" />
              {movie?.vote_average}
            </MovieRated>
            {MovieListGenres(movie.genre_ids)}
            <MoviePrice>R$ {movie?.price.toFixed(2)}</MoviePrice>
          </div>
          <ButtonBuy onClick={() => setNewItemCart(movie)}>Adicionar</ButtonBuy>
        </Card>
      ))}
    </List>
  );
}
