import styled from "styled-components";
import { colors } from "../../styles/color";

export const NoResults = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  .warning {
    font-size: 30px;
    color: ${colors.text};
  }
`;
