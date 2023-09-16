import { styled } from "styled-components";

export const ThemeUserBackground = styled.div`
  width: 100%;
  height: 300px;
  object-fit: cover;

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  font-size: 20px;
  align-text: center;
  width: 100%;
  align-items: center;
  justify-contect: center;


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
`;

export const ThemeBackgroundChange = styled.svg`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

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
`
export const FileInputIcon = styled.input`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0;
  background-color: red;

  width: 40px;
  height: 40px;
  fill: white;
`
