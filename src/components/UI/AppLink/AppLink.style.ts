import { styled } from "styled-components";

export const ThemeLink = styled.a`
color: inherit;

&:visited {
    color: ${(props) => props.theme.colors.gray};
}

display: inline-block;
width: 100%;
text-align: right;
text-decoration: none;

&:hover {
    color: ${(props) => props.theme.colors.textColor};
    text-decoration: underline;
}


`