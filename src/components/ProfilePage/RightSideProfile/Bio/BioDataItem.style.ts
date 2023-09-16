import styled from "styled-components";

export const ThemeBioData = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid var(--light-gray);
  margin-bottom: 30px;

  .data__item {
    .icon {
      width: 24px;
      height: 24px;
      margin-bottom: 10px;

    }
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
