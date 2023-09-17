import { styled } from "styled-components";

export const ThemRightSideMain = styled.aside`
  grid-area: R;

  .bio {
    margin-bottom: 20px;
  }

  .List {
    margin-bottom: 20px;
  }

  .FriendsBlock {
    margin-bottom: 20px;
  }

  .FriendsBlock {
    background-color: var(--elems-bgc);
    padding: calc(1vw + 11px);
    border-radius: 20px;

    .Friends__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: var(--prime-color);
        font-weight: 400;
      }
    }

    .Friends__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
      grid-auto-rows: auto;
      gap: 20px;

      .friend {
        img {
          display: block;
          margin: 0 auto 10px;
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
        }

        span {
          display: block;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }

  .MusicBlock {
    box-shadow: 0 0 10px var(--light-gray);
    background-color: var(--elems-bgc);
    padding: calc(1vw + 11px);
    border-radius: 20px;

    &__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: var(--prime-color);
        font-weight: 400;
      }
    }

    .MusicElem {
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

      img {
        flex: 0 0 70px;
        height: 70px;
        width: 70px;
        border-radius: 5px;
        object-fit: cover;
      }

      .music__description {
        flex: 1 1 auto;

        .main__text {
          margin-bottom: 5px;
          display: inline-block;
        }
      }

      .plus-button {
        flex: 0 0 24px;
        height: 24px;

        border: 2px solid var(--prime-color);
        border-radius: 50%;

        position: relative;

        &::before {
          content: "";
          border-radius: 5px;
          height: 2px;
          width: 70%;
          background-color: var(--prime-color);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 200ms;
        }

        &::after {
          content: "";
          border-radius: 5px;
          width: 2px;
          height: 70%;
          background-color: var(--prime-color);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: 200ms;
        }

        &._active {
          &::after {
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }
      }
    }
  }

  .CommentBlock {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    gap: 15px;

    margin-top: 20px;
    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: var(--light-gray);
    }

    &::before {
      content: "";
      height: 1px;
      width: 100%;
      background-color: var(--light-gray);

      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
    }

    img {
      flex: 0 0 60px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .comment__description {
      flex: 1 1 auto;

      .comment__owner {
        margin-bottom: 10px;
        display: inline-block;
      }

      .comment__text {
        font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
        font-weight: 300;
        margin-bottom: 10px;
      }

      .reply {
        color: var(--prime-color);
        font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      }
    }

    .date {
      position: absolute;
      top: 15px;
      right: 15px;
      color: var(--gray);
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    }

    .icon-like {
      position: absolute;
      bottom: 15px;
      right: 15px;

      overflow: visible;
      width: 22px;

      fill: none;
      stroke: var(--dark-gray);
      stroke-width: 2px;

      transition: 200ms;

      &._active {
        fill: var(--red);
        stroke: none;
      }

      &:hover {
        stroke: none;
        fill: var(--prime-color);
      }
    }
  }

  @media (max-width: 1440px) {
    display: none;
  }
`