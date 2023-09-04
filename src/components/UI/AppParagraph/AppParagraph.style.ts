import { styled } from "styled-components";

export const ThemeParagraph = styled.p`
margin-bottom: 30px;
font-family: inherit;
font-size: 20px;
line-height: 24.2px;
text-align: center;
color: ${(props) => props.theme.colors.placeholderColor};;
`