import { styled } from "styled-components"

export const ThemeProfileHeader = styled.div`
grid-area: P;

height: 440px;
border-radius: 20px;
overflow: hidden;
background-color: var(--elems-bgc);
box-shadow: 0 0 10px var(--light-gray);
position: relative;

.icon-edit {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;

    width: 40px;
    height: 40px;
    fill: white;

    transition: 200ms;

    &:hover {
        filter: drop-shadow(0 0 10px var(--prime-color));
    }

    &:active {
        scale: 0.9;
        transition: 100ms;
    }
}

.user__info {
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
}

.user__name {
    margin-bottom: 0px;
}

h1{
    margin: 0px;
}

.user__block {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    width: 100%;
    padding: 20px;
    padding-left: calc(3.9vw + 165px); 
    background-color: var(--elems-bgc);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: calc(3.2vw + 113px); 
        height: calc(3.2vw + 113px);
        object-fit: cover;
        border: 5px solid var(--elems-bgc);
        border-radius: 50%;

        position: absolute;
        top: -56px;
        left: 30px;
    }

    .buttons-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

.profile-background {
    width: 100%;
    height: 300px;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background: rgb(44, 40, 113);
    background: linear-gradient(
        90deg,
        rgba(44, 40, 113, 1) 0%,
        rgba(171, 101, 128, 1) 37%,
        rgba(195, 223, 176, 1) 89%,
        rgba(203, 207, 150, 1) 99%
    );
    background-size: 200% 200%;
    animation: wallpaper-anim 10s ease infinite;
}
@keyframes wallpaper-anim {
    0% {
    background-position: 0% 0%;
    }
    50% {
    background-position: 100% 0%;
    }
    100% {
    background-position: 0% 0%;
    }
}


  
@media (max-width: 730px) {
    margin-bottom: 20px;

}
  
  
  
  
  
  
@media (max-width: 1750px) {

    height: 300px;

    .user__block {
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;

        padding: 20px;

        img {
            width: 130px;
            height: 130px;
            top: -75px;
            left: 50px;
        }

        .user__description {
            width: 100%;
        }

        .user__info {
            width: 100%;

            .parameter {
                flex: 1 1 33.333%;
                text-align: center;
            }
        }

        .user__name {
            text-align: right;
        }

        .buttons-wrapper {
            width: 100%;
            flex-direction: row;

            button {
                flex: 1 1 50%;
            }
        }
    }
}

`