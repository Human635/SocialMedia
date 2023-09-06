import { styled } from "styled-components";

export const ThemeContainer = styled.div`
padding: 0 calc(12vw - 35px); 
margin-top: calc(4.4vw + 62px); 
    
box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
border-radius: 20px;
background-color: ${(props) => props.theme.colors.elemsBgc};
margin: 0 auto;
width: 80%;
max-width: 500px;
text-align: center;
padding: 40px;

@media (max-width: 530px) {
    width: 100%;
}
`