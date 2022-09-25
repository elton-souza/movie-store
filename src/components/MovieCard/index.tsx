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
} from "./styles";

interface MovieCardProps {
  movie: Movie;
  listGenres: Genre;
}

export default function MovieCard({ movie, listGenres }: MovieCardProps) {
  const { setNewItemCart, favorites, setNewFavorites } = useContext(StoreContext);
  const genres = movie.genre_ids;
  const movieListGenres = listGenres.genres;
  const newListGenres = genres.map(
    (id) => movieListGenres.filter((genre) => genre.id === id)[0]
  );
  const favoriteMovie = favorites.filter( favorite => favorite.id === movie.id)[0];

  const verifiedFavorite = () => {
    setNewFavorites(movie)
  }

  return (
    <Card>
      <MovieImage image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
        <BoxIcon>
          <div 
            className="roudend"
            onClick={() => {
              !favoriteMovie && verifiedFavorite();
            }}
          >
            {favoriteMovie ? <BsStarFill size={20} className="iconStar" /> : <BsStar size={20} className="iconStar" />}
          </div>
        </BoxIcon>
        <MovieData>
          {format(new Date(movie.release_date), "dd 'de' MMMM 'de' yyyy", {
            locale: ptBR,
          })}
        </MovieData>
      </MovieImage>
      <div className="box-info">
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieRated>
          <BsStarFill className="icon" />
          {movie.vote_average}
        </MovieRated>
        <ListGenres>
          {newListGenres.map((value) => (
            <MovieGenre key={value.id}>{value.name}</MovieGenre>
          ))}
        </ListGenres>
        <MoviePrice>R$ {movie.price.toFixed(2)}</MoviePrice>
      </div>
      <ButtonBuy onClick={() => setNewItemCart(movie)}>Adicionar</ButtonBuy>
    </Card>
  );
}
