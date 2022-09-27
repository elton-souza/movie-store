import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Popup, Sidebar } from "semantic-ui-react";
import styled from "styled-components";
import { colors } from "../../styles/color";

export const CustomSidebar = styled(Sidebar)`
  top: 80px !important;
  background-color: ${colors.backgroundSecundary};
  padding: 10px;

  @media screen and (max-width: 720px) {
    width: 100vw !important;
    padding: 10px 30px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  color: ${colors.text};
  font-size: 20px;
`;

export const ButtonAction = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  text-decoration: underline;
  color: ${colors.primary};
  cursor: pointer;
  font-weight: bold;
`;

export const BoxItems = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 10px;
`;
export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MovieName = styled.p`
  color: ${colors.text};
  font-size: 14px;
  max-width: 80px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MovieValue = styled.span`
  color: ${colors.text};
  font-size: 14px;
`;

export const BackgroundIcon = styled.button`
  background: none;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
`;

export const DeleteIcon = styled(MdDelete)`
  width: 25px;
  height: 25px;
  color: ${colors.primary};
  cursor: pointer;
`;
export const IconCart = styled(FaShoppingCart)`
  color: ${colors.primary};
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 80px;
  .value-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.text};
  }

  .button-buy {
    background-color: ${colors.primary};
    border: none;
    border-radius: 4px;
    color: ${colors.secundary};
    padding: 10px 0px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Warning = styled.p`
  font-size: 18px;
  color: ${colors.text};
  text-align: center;
  padding-top: 50px;
`;

export const BoxActionMobile = styled.div`
  display: none;
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const IconSearch = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  cursor: pointer;

  .icon-search {
    width: 20px;
    height: 20px;
    color: ${colors.text};
  }
`;
