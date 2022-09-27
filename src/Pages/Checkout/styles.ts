import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { colors } from "../../styles/color";

export const Main = styled.main`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0px;
`;

export const Title = styled.h3`
  font-size: 30px;
  color: ${colors.text};
  margin-bottom: 50px;
`;

export const Form = styled.form`
  margin-top: 80px;
  display: flex;
  gap: 100px;
  align-items: flex-start;
  padding: 10px 20px;

  .box-movies {
    flex: 1;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 80px;

    .box-movies {
      width: 100%;
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 600px) {
    .mobile-text {
      font-size: 12px;
    }

    .mobile-price {
      padding: 0px !important;
    }
  }
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

  @media screen and (max-width: 600px) {
    width: 18px;
    height: 18px;
  }
`;

export const Warning = styled.div`
  margin-top: 100px;
  text-align: center;
  .title {
    font-size: 30px;
    color: ${colors.text};
    margin-bottom: 30px;
  }

  .back {
    color: ${colors.primary};
    text-decoration: underline;
  }
`;

export const BuyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  padding-bottom: 80px;

  .value-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.text};
  }

  .total {
    font-size: 20px;
  }

  .price {
    font-size: 30px;
  }

  .button-buy {
    background-color: ${colors.primary};
    border: none;
    border-radius: 4px;
    color: ${colors.secundary};
    padding: 10px 0px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    .total {
      font-size: 18px;
    }

    .price {
      font-size: 25px;
    }

    .button-buy {
      font-size: 18px;
    }
  }
`;

export const BackButton = styled.button`
  background-color: ${colors.primary};
  font-size: 18px;
  color: ${colors.backgroundSecundary};
  padding: 5px 50px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .congrats {
    font-size: 25px;
    font-weight: bold;
  }
  .name {
    font-size: 18px;
    font-weight: bold;
  }
  .confirmed {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    .congrats {
      font-size: 18px;
    }
    .name {
      font-size: 15px;
    }
    .confirmed {
      font-size: 15px;
    }
  }
`;
