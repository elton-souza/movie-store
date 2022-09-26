import styled from "styled-components";
import { colors } from "../../styles/color";

export const List = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding-bottom: 50px;
  margin-top: 80px;
`;

export const Card = styled.div`
  width: 200px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${colors.primary};
  border-radius: 4px;

  .box-info {
    flex: 1;
    text-align: center;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const MovieImage = styled.div<{ image: string }>`
  width: 100%;
  min-height: 300px;
  background-image: ${(props) =>
    props.image !== null
      ? `url(https://image.tmdb.org/t/p/original/${props.image})`
      : `none`};
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
  border-bottom: 2px solid ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxIconError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 40px;
  .error {
    font-size: 14px;
    color: ${colors.text};
  }
`;

export const MovieData = styled.span`
  color: ${colors.text};
  background-color: ${colors.primary};
  padding: 5px 10px;
  font-size: 14px;
  text-align: center;
`;

export const MovieTitle = styled.h3`
  font-size: 16px;
  color: ${colors.text};
  font-weight: 600;
`;

export const BoxIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;

  .roudend {
    background-color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .iconStar {
    color: ${colors.primary};
  }
`;

export const MovieRated = styled.span`
  color: ${colors.text};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;

  .icon {
    color: ${colors.primary};
  }
`;

export const ListGenres = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MovieGenre = styled.span`
  padding: 5px 10px;
  background-color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  color: ${colors.text};
`;

export const MoviePrice = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: block;
  color: ${colors.text};
`;

export const ButtonBuy = styled.button`
  width: 100%;
  padding: 10px 0px;
  font-family: "Roboto", sans-serif;
  border: none;
  border-top: 2px solid ${colors.primary};
  background-color: ${colors.primary};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
