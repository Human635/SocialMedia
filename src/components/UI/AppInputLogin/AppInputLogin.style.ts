import { styled } from "styled-components";

type StyledInput = {
    isError?: boolean
}

export const ThemeInput = styled.input<StyledInput>`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;

  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 2px solid ${(props) => props.theme.colors.disabledBgc};
    background-color: transparent;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
      border-color: ${(props) => props.theme.colors.primeColor};
    }

    
    ${(props) => props.isError && `
        border-color: ${props.theme.colors.red}
    `}
`