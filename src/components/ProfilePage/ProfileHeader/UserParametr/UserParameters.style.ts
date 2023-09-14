import { styled } from "styled-components";

export const ThemeUserParametrs = styled.div`
  display: inline-flex;
  align-items: center;

  gap: calc(3.8vw - 34px);
  border-top: 1px solid var(--light-gray);
  padding-top: 20px;

  .parameter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border-radius: 12px;
    padding: 10px;
    transition: 200ms;

    &:hover {
      background-color: var(--light-gray);
    }

    .value {
      color: var(--gray);
    }
  }

  @media (max-width: 1750px) {
    width: 100%;

    .parameter {
      flex: 1 1 33.333%;
      text-align: center;
    }
  }
`;
