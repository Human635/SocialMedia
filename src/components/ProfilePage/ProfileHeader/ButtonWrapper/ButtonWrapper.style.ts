import { styled } from "styled-components";

export const ThemeButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1750px) {
      width: 100%;
      flex-direction: row;

    button {
      flex: 1 1 50%;
    }
  }
`;
