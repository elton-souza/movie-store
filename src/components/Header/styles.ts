import styled from "styled-components";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Input, Sidebar, SidebarProps} from "semantic-ui-react";
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
  }
`;

export const InputSearch = styled(Input)`
  max-width: 500px;
  width: 100%;
`;

export const BoxIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  .cart {
    position: relative;
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
`;