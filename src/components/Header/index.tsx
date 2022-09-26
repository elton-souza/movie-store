import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Input } from "semantic-ui-react";
import { MovieContext } from "../../context/movieContext";
import { StoreContext } from "../../context/storeContext";
import SidebarCustom from "../Sidebar";
import {
  Badge,
  BoxIcons,
  HeaderCustomized,
  IconCart,
  IconFavorite,
  InputSearch,
  Logo,
} from "./styles";

export default function Header() {
  const { cart } = useContext(StoreContext);
  const { search: newSearch } = useContext(MovieContext)
  const [typeSidebar, setTypeSidebar] = useState<"cart" | "favorite">();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [search, setSearch] = useState("");

  const controlSidebar = (type?: "cart" | "favorite") => {
    setOpenSidebar((state) => !state);
    if (type) {
      setTypeSidebar(type);
    }
  };

  return (
    <>
      <HeaderCustomized>
        <div className="container">
          <Link to="/">
            <Logo>MovieStore</Logo>
          </Link>
          <Input
            icon={
              <Icon
                onClick={() => newSearch(search, 1)}
                name="search"
                inverted
                circular
                link
              />
            }
            placeholder="Pesquisar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <BoxIcons>
            <IconFavorite onClick={() => controlSidebar("favorite")} />
            <div className="cart">
              <IconCart onClick={() => controlSidebar("cart")} />
              <Badge>{cart.length}</Badge>
            </div>
          </BoxIcons>
        </div>
      </HeaderCustomized>
      <SidebarCustom
        type={typeSidebar}
        open={openSidebar}
        controlSidebar={controlSidebar}
      />
    </>
  );
}
