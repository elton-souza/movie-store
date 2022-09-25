import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
import { colors } from "../../styles/color";
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
  const [typeSidebar, setTypeSidebar] = useState<"cart" | "favorite">();
  const [openSidebar, setOpenSidebar] = useState(false);

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
          <InputSearch icon="search" placeholder="Pesquisar" />
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
