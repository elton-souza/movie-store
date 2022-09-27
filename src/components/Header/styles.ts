import styled from "styled-components";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Dropdown } from "semantic-ui-react";
import { colors } from "../../styles/color";

export const Logo = styled.span`
  font-size: 30px;
  color: ${colors.primary};
  font-weight: 900;
`;

export const HeaderCustomized = styled.header`
  width: 100%;
  background-color: ${colors.backgroundSecundary};
  position: fixed;
  z-index: 1;
  .container {
    max-width: 1100px;
    width: 100%;
    min-height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 25px;
  }
`;
export const Search = styled.form`
  display: none;
  @media screen and (min-width: 720px) {
    display: flex;
  }
`;
export const SearchMobile = styled.form`
  position: fixed;
  background-color: ${colors.backgroundSecundary};
  top: 80px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const BoxIcons = styled.div`
  display: none;

  .cart {
    position: relative;
  }
  @media screen and (min-width: 720px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const IconFavorite = styled(FaHeart)`
  color: ${colors.primary};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const IconCart = styled(FaShoppingCart)`
  color: ${colors.primary};
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Badge = styled.span`
  position: absolute;
  background-color: white;
  color: black;
  font-weight: 500;
  padding: 5px 8px;
  border-radius: 50%;
  bottom: 50%;
  left: 80%;

  @media screen and (max-width: 720px) {
    left: auto;
  }
`;

export const DropdownMenu = styled(Dropdown.Menu)`
  background-color: ${colors.backgroundSecundary} !important;
  top: 61px !important;
  left: auto !important;
  right: -25px !important;
  border-radius: 0px !important;
  width: 100vw !important;
`;

export const MenuItem = styled(Dropdown.Item)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 20px;

  .menu-text {
    color: ${colors.text};
    font-size: 20px;
  }
`;
