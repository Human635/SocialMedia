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
    }
}

`