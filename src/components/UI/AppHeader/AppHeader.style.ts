import { styled } from "styled-components"

export const ThemeAppHeader = styled.div`
h1{
    font-size: 32px;
    font-size: calc(0.5vw + 22px);
    font-weight: 600;
    margin: 0;
    margin-bottom: 50px;
    color: ${(props) => props.theme.colors.textColor};
}

h2{
    font-size: calc(0.8vw + 8px); 
    font-weight: 500;
    color: ${(props) => props.theme.colors.textColor};
}
`