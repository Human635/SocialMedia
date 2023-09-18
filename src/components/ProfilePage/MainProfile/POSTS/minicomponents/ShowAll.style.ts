import styled from "styled-components";

export const ThemeShowAll = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid transparent;
    transition: 200ms;

    margin: 0 0 0 auto;
    width: fit-content;

    .icon {
      width: 15px;
      height: 15px;
      fill: var(--prime-color);
      rotate: -90deg;
    }

    &:hover {
      border-color: var(--light-gray);
      background-color: var(--bgc);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      color: white;

      .icon {
        fill: white;
      }
    }
`