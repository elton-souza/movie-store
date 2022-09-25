import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Popup, Sidebar } from "semantic-ui-react";
import { StoreContext } from "../../context/storeContext";
import { colors } from "../../styles/color";
import {
  BackgroundIcon,
  BoxItems,
  BoxTitle,
  ButtonAction,
  BuyInfo,
  DeleteIcon,
  IconCart,
  Item,
  ListItem,
  MovieName,
  MovieValue,
  Title,
  Warning,
} from "./style";

interface SidebarProps {
  type: "cart" | "favorite" | undefined;
  open: boolean;
  controlSidebar: (
    type?: "cart" | "favorite" | undefined,
    status?: boolean
  ) => void;
}
export default function SidebarCustom({
  type,
  open,
  controlSidebar,
}: SidebarProps) {
  const {
    favorites,
    cart,
    clearCart,
    clearFavorites,
    removeItemCart,
    removeItemFavorites,
    setNewItemCart,
  } = useContext(StoreContext);
  const [cartValue, setCartValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setCartValue(0);
    cart.forEach((cart) => {
      setCartValue((value) => value + cart.price);
    });
  }, [cart]);

  return (
    <Sidebar
      animation="push"
      icon="labeled"
      inverted
      onHide={() => controlSidebar()}
      vertical
      visible={open}
      width="wide"
      direction="right"
      style={{
        top: 80,
        backgroundColor: colors.backgroundSecundary,
        padding: "10px",
      }}
    >
      <BoxTitle>
        <Title>
          {type === "cart" && "Meu Carrinho"}
          {type === "favorite" && "Meus Favoritos"}
        </Title>
        {type === "cart" && cart.length > 0 && (
          <ButtonAction onClick={() => clearCart()}>Esvaziar</ButtonAction>
        )}
        {type === "favorite" && favorites.length > 0 && (
          <ButtonAction onClick={() => clearFavorites()}>Esvaziar</ButtonAction>
        )}
      </BoxTitle>
      <BoxItems>
        {type === "cart" && (
          <>
            {cart.length > 0 ? (
              <>
                <ListItem>
                  {cart.map((movie, index) => (
                    <Item key={index}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width="50px"
                        height="50px"
                      />
                      <MovieName>{movie.title}</MovieName>
                      <MovieValue>R$ {movie.price.toFixed(2)}</MovieValue>
                      <Popup
                        content="Remover do Carrinho"
                        inverted
                        position="bottom right"
                        style={{
                          fontSize: 14,
                        }}
                        trigger={
                          <BackgroundIcon onClick={() => removeItemCart(index)}>
                            <DeleteIcon />
                          </BackgroundIcon>
                        }
                      />
                    </Item>
                  ))}
                </ListItem>
                <BuyInfo>
                  <div className="value-info">
                    <span>Total: </span>
                    <span>R$ {cartValue.toFixed(2)}</span>
                  </div>
                  <button
                    className="button-buy"
                    onClick={() => {
                      controlSidebar();
                      history.push("/checkout");
                    }}
                  >
                    Finalizar compra
                  </button>
                </BuyInfo>
              </>
            ) : (
              <Warning>Sem items no carrinho adicionado</Warning>
            )}
          </>
        )}
        {type === "favorite" && (
          <>
            {favorites.length > 0 ? (
              <ListItem>
                {favorites.map((favorite, index) => (
                  <Item key={index}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`}
                      alt={favorite.title}
                      width="50px"
                      height="50px"
                    />
                    <MovieName>{favorite.title}</MovieName>
                    <MovieValue>R$ {favorite.price.toFixed(2)}</MovieValue>
                    <div className="actions">
                      <Popup
                        content="Adicionar no Carrinho"
                        inverted
                        position="bottom right"
                        style={{
                          fontSize: 14,
                        }}
                        trigger={
                          <BackgroundIcon
                            onClick={() => setNewItemCart(favorite)}
                          >
                            <IconCart />
                          </BackgroundIcon>
                        }
                      />
                      <Popup
                        content="Remover dos favoritos"
                        inverted
                        position="bottom right"
                        style={{
                          fontSize: 14,
                        }}
                        trigger={
                          <BackgroundIcon
                            onClick={() => removeItemFavorites(favorite)}
                          >
                            <DeleteIcon />
                          </BackgroundIcon>
                        }
                      />
                    </div>
                  </Item>
                ))}
              </ListItem>
            ) : (
              <Warning>Sem favoritos adicionados</Warning>
            )}
          </>
        )}
      </BoxItems>
    </Sidebar>
  );
}
