import { styled } from "styled-components";

export const UserInitial = styled.span`
    width: calc(3.2vw + 113px); 
    height: calc(3.2vw + 113px);
    object-fit: cover;
    border: 5px solid  ${(props) => props.theme.colors.elemsBgc};
    border-radius: 50%;
    background: #001fdb
    position: absolute;
    top: -56px;
    left: 30px;
    text-align: center;
    font-size: 48px;
    color: #fff;
    line-height: calc(3.2vw + 113px);
    margin: 0;


    @media (max-width: 1750px) {
        width: 130px;
        height: 130px;
        top: -75px;
        left: 50px;
    }
`

export const FileInput = styled.input`
    width: calc(3.2vw + 113px); 
    height: calc(3.2vw + 113px);
    object-fit: cover;
    border: 5px solid ${(props) => props.theme.colors.elemsBgc};
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
    margin: 0;


    position: absolute;
    top: -56px;
    left: 30px;

    @media (max-width: 1750px) {
        width: 130px;
        height: 130px;
        top: -75px;
        left: 50px;
    }
`
export const User = styled.img`
    width: calc(3.2vw + 113px); 
    height: calc(3.2vw + 113px);
    object-fit: cover;
    border: 5px solid ${(props) => props.theme.colors.elemsBgc};
    border-radius: 50%;
    cursor: pointer;
    margin: 0;


    position: absolute;
    top: -56px;
    left: 30px;

    @media (max-width: 1750px) {
        width: 130px;
        height: 130px;
        top: -75px;
        left: 50px;
    }
`