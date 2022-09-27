import React, { useContext, useState, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Icon, Input } from "semantic-ui-react";
import { StoreContext } from "../../context/storeContext";
import { colors } from "../../styles/color";
import SidebarCustom from "../Sidebar";
import { BoxActionMobile, IconSearch } from "../Sidebar/style";
import {
  Badge,
  BoxIcons,
  DropdownMenu,
  HeaderCustomized,
  IconCart,
  IconFavorite,
  Logo,
  MenuItem,
  Search,
  SearchMobile,
} from "./styles";

export default function Header() {
  const { cart } = useContext(StoreContext);
  const [typeSidebar, setTypeSidebar] = useState<"cart" | "favorite">();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const history = useHistory();

  const controlSidebar = (type?: "cart" | "favorite") => {
    setOpenSidebar(!openSidebar);
    if (type) {
      setTypeSidebar(type);
    }
  };

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    setSearch("");
    setOpenSearch(false);
    if (search.length === 0) {
      history.push("/");
    } else {
      history.push(`/results/query=${search}`);
    }
  };

  return (
    <>
      <HeaderCustomized>
        <div className="container">
          <Link to="/">
            <Logo>MovieStore</Logo>
          </Link>
          <Search onSubmit={onSubmitForm} className="search">
            <Input
              icon={<Icon name="search" inverted circular />}
              placeholder="Pesquisar"
              value={search}
              style={{ width: 350 }}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Search>
          <BoxIcons>
            <IconFavorite onClick={() => controlSidebar("favorite")} />
            <div className="cart">
              <IconCart onClick={() => controlSidebar("cart")} />
              <Badge>{cart.length}</Badge>
            </div>
          </BoxIcons>
          <BoxActionMobile>
            <IconSearch onClick={()=> setOpenSearch(!openSearch)}>  
              <FaSearch className="icon-search" />
            </IconSearch>
            <Dropdown icon={<MdMenu size={40} color={colors.primary} />}>
              <DropdownMenu direction="right">
                <MenuItem onClick={() => controlSidebar("favorite")}>
                  <span className="menu-text">Favoritos</span>
                  <IconFavorite />
                </MenuItem>
                <MenuItem onClick={() => controlSidebar("cart")}>
                  <span className="menu-text">Carrinho</span>
                  <div className="cart">
                    <IconCart />
                    <Badge>{cart.length}</Badge>
                  </div>
                </MenuItem>
              </DropdownMenu>
            </Dropdown>
          </BoxActionMobile>
        </div>
      </HeaderCustomized>
      {openSearch && (
        <SearchMobile onSubmit={onSubmitForm} className="search">
          <Input
            icon={<Icon name="search" inverted circular />}
            placeholder="Pesquisar"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </SearchMobile>
      )}
      <SidebarCustom
        type={typeSidebar}
        open={openSidebar}
        controlSidebar={controlSidebar}
      />
    </>
  );
}
