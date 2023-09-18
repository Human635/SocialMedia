import styled from "styled-components";

export const Themecontrols = styled.div`
  display: flex;
  margin-bottom: 20px;

  .tabs {
    flex: 1 1 auto;

    display: flex;
    align-items: center;
    gap: 15px;

    .tab {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-radius: 10px;
      border: 1px solid transparent;

      transition: 200ms;

      &._active {
        border-color: var(--light-gray);
        background-color: var(--bgc);
      }

      &:hover {
        border-color: var(--light-gray);
        background-color: var(--bgc);
      }

      &:active {
        background-color: var(--prime-color);
        color: white;
        transition: 100ms;

        .icon {
          fill: white;
        }
      }
    }
  }

  .upload-media {
    cursor: pointer;
    flex: 0 1 auto;

    display: flex;
    align-items: center;
    gap: 5px;

    padding: 8px;
    border: 1px solid transparent;
    border-radius: 10px;

    transition: 200ms;

    .icon {
      width: 15px;
      height: 15px;
      fill: var(--prime-color);
    }

    &:hover {
      border-color: var(--light-gray);
      background-color: var(--bgc);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      color: white;

      .icon {
        fill: white;
      }
    }
  }

  .WhatsNew {
    box-shadow: 0 0 10px var(--light-gray);
    background-color: var(--elems-bgc);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      flex: 0 0 40px;
      border-radius: 50%;
      height: 40px;
      object-fit: cover;
    }

    input {
      flex: 1 1 auto;
      background: transparent;
    }

    .icons-wrapper {
      flex: 0 1 20%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;

      .icon {
        cursor: pointer;
        flex: 0 0 24px;
        width: 24px;
        border: 1px solid transparent;
        border-radius: 10px;
        fill: var(--prime-color);
        padding: 10px;
        box-sizing: content-box;

        transition: 200ms;

        &:hover {
          border-color: var(--light-gray);
          background-color: var(--bgc);
        }

        &:active {
          transition: 100ms;
          background-color: var(--prime-color);
          fill: white;
        }
      }
    }
  }

  @media (max-width: 730px) {
    .WhatsNew {
      padding: 10px 15px;
    }
  }

  .UserPosts {
    box-shadow: 0 0 10px var(--light-gray);
    padding: calc(1vw + 11px);
    background-color: var(--elems-bgc);
    border-radius: 20px;
    position: relative;

    .icon {
      width: 20px;
      height: 20px;
      transition: 200ms;
      fill: var(--prime-color);
    }

    .media-container {
      margin-bottom: 20px;
    }

    .show-all {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px;
      border-radius: 10px;
      border: 1px solid transparent;
      transition: 200ms;

      margin: 0 0 0 auto;
      width: fit-content;

      .icon {
        width: 15px;
        height: 15px;
        fill: var(--prime-color);
        rotate: -90deg;
      }

      &:hover {
        border-color: var(--light-gray);
        background-color: var(--bgc);
      }

      &:active {
        transition: 100ms;
        background-color: var(--prime-color);
        color: white;

        .icon {
          fill: white;
        }
      }
    }
  }

  .Post {
    box-shadow: 0 0 10px var(--light-gray);
    padding: calc(1vw + 11px);
    background-color: var(--elems-bgc);
    border-radius: 20px;
    position: relative;

    &._liked {
      .icon-wrapper {
        .icon-like {
          fill: var(--red);
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: var(--red);
        }
      }
    }

    &._marked {
      .icon-wrapper {
        .icon-mark {
          fill: var(--prime-color);
          stroke: 0;
          stroke-width: 0;
        }
      }
    }

    .UserElem {
      cursor: default;
      padding: 0;
      margin-bottom: 30px;

      &:hover {
        background-color: initial;
        scale: 1;
      }

      &::after {
        display: none; //? нижняя полоса в списке
      }

      img {
        flex: 0 0 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &__text {
      margin-bottom: 20px;
    }

    .media-container {
      margin-bottom: 30px;
    }
  }

  .icon-more {
    cursor: pointer;
    position: absolute;
    top: calc(1vw + 11px);
    right: calc(1vw + 11px);
    width: 25px;
    padding: 15px;
    box-sizing: content-box;
    border-radius: 15px;

    fill: var(--dark-gray);
    transition: 200ms;

    &:hover {
      background-color: var(--light-gray);
    }

    &:active {
      transition: 100ms;
      background-color: var(--prime-color);
      fill: white;
    }
  }

  .media-container {
    display: grid;
    gap: 5px;

    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    grid-template-rows: minmax(300px, 400px);
    grid-auto-rows: minmax(300px, 400px);

    border-radius: 20px;
    overflow: hidden;

    .media__item {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }

  @media (max-width: 1480px) {
    .media-container {
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      grid-template-rows: minmax(100px, 200px);
      grid-auto-rows: minmax(100px, 200px);
    }
  }

  .Repost__wrapper {
    border-left: 1px solid var(--light-gray);
    padding-left: 30px;
    margin-left: 30px;
  }

  .PostControls {
    display: grid;
    grid-template-columns: repeat(3, auto) 2fr;

    justify-content: center;
    align-items: center;

    gap: 15px;

    .icon-wrapper {
      cursor: pointer;
      padding: 10px;
      background-color: var(--bgc);
      border-radius: 15px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        background-color: var(--light-gray);
      }

      .count {
        color: var(--dark-gray);
        font-weight: 400;
      }

      .icon {
        height: 25px;
        overflow: visible;
        fill: transparent;
        transition: 200ms;
      }

      .icon-like {
        stroke: var(--dark-gray);
        stroke-width: 2px;
      }

      .icon-mark {
        stroke: var(--dark-gray);
        stroke-width: 2px;
      }

      &.mark {
        justify-self: self-end;
      }
    }
  }
`;
