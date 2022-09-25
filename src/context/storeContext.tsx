import { createContext, ReactNode, useEffect, useState } from "react";
import { Movie } from "../@types/movies";

interface ContextProps {
  favorites: Movie[];
  cart: Movie[];
  setNewFavorites: (movie: Movie) => void;
  setNewItemCart: (movie: Movie) => void;
  removeItemCart: (indexMovie: number) => void;
  removeItemFavorites: (movie: Movie) => void;
  clearCart: () => void;
  clearFavorites: () => void;
}

interface StoreProviderContext {
  children: ReactNode;
}

export const StoreContext = createContext<ContextProps>({
  favorites: [],
  cart: [],
} as any);

export function StoreProvider({ children }: StoreProviderContext) {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [cart, setCart] = useState<Movie[]>([]);

  const setNewFavorites = (movie: Movie) => {
    localStorage.setItem("favorites", JSON.stringify([...favorites, movie]));
    setFavorites((state) => [...state, movie]);
  };

  const setNewItemCart = (movie: Movie) => {
    localStorage.setItem("cart", JSON.stringify([...cart, movie]));
    setCart((state) => [...state, movie]);
  };

  const removeItemCart = (movieIndex: number) => {
    if (cart.length === 1 && movieIndex === 0) {
      setCart([]);
      localStorage.removeItem("cart");
    } else {
      setCart((state) =>
        state.filter((movie, index) => {
          if (index !== movieIndex) {
            return movie;
          }
        })
      );
      localStorage.setItem("cart", JSON.stringify([...cart]));
    }
  };

  const removeItemFavorites = (movieSelected: Movie) => {
    setFavorites((state) => state.filter((movie) => movie !== movieSelected));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
  };

  useEffect(() => {
    const recoveredCart = localStorage.getItem("cart");
    const recoverdFavorites = localStorage.getItem("favorites");

    if (recoveredCart) setCart(JSON.parse(recoveredCart));
    if (recoverdFavorites) setFavorites(JSON.parse(recoverdFavorites));
  }, []);

  return (
    <StoreContext.Provider
      value={{
        favorites,
        cart,
        setNewFavorites,
        setNewItemCart,
        clearCart,
        clearFavorites,
        removeItemCart,
        removeItemFavorites,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
