import { styled } from "styled-components";

export const ThemeLeftMenu = styled.aside`
  grid-area: L;

  .Navbar {
    margin-bottom: 20px;
  }

    .List {
        background-color: var(--elems-bgc);
        border-radius: 20px;
        padding: calc(1vw + 11px);

        &__title {
        margin-bottom: 20px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        }
    }

  .UserElem {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 15px;

    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: var(--light-gray);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      p {
        color: white;
      }

      .Badge {
        background-color: white;
        color: var(--text-color);
      }
    }

    &:not(:last-child) {
      margin-bottom: 15px;

      &::after {
        content: "";
        height: 1px;
        width: 80%;
        background-color: var(--light-gray);

        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user__description {
      flex: 1 1 auto;

      .main__text {
        margin-bottom: 5px;
        display: inline-block;
      }
    }

    .secondary__text {
      &._online {
        color: var(--green);
      }
    }

    .Navbar {
        box-shadow: 0 0 10px var(--light-gray);
        border-radius: 20px;
        padding: calc(1vw + 11px);
        background-color: var(--elems-bgc);
        color: var(--text-color);
        
        .navbar__list {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        
        .navbar__item {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 20px;
        
            border-radius: 10px;
            padding: 10px 15px;
            list-style: none;
            transition: 200ms;
        
            .icon {
            flex: 0 1 25px;
            height: calc(1vw + 5px); //? 1440 - 20 | 1920 - 25
            object-fit: contain;
            fill: var(--prime-color);
            }
        
            .item__name {
            flex: 1 1 auto;
            }
        
            &:hover {
            background-color: var(--light-gray);
            }
        
            &:active {
            transition: 100ms;
            background-color: var(--prime-color);
            color: white;
        
            .icon {
                fill: white;
            }
        
            .Badge {
                background-color: white;
                color: var(--text-color);
            }
            }
        }
    }

    .Navbar {
        .navbar__item {
          display: inline-block;
    
          .icon {
            height: 25px;
          }
    
          .item__name {
            display: none;
          }
    
          .Badge {
            display: none;
          }
        }
      }

    @media (max-width: 730px){
        .LeftSide {
            display: none;
        }
    }

    @media (max-width: 1100px){
        
            .List {
              display: none;
            }
          
    }
`;
