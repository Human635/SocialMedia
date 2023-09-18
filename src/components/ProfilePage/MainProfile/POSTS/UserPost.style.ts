import styled from "styled-components";

export const ThemeUserPost = styled.div`
  box-shadow: 0 0 10px var(--light-gray);
  padding: calc(1vw + 11px);
  background-color: var(--elems-bgc);
  border-radius: 20px;
  position: relative;
  margin-bottom: 20px;

  .icon {
    width: 20px;
    height: 20px;
    transition: 200ms;
    fill: var(--prime-color);
  }
`;
