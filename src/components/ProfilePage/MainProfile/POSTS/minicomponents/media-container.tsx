import React from "react";
import { ThemeMediaContainer } from "./media-controls.style";

export const MediaContainer = () => {
  return (
    <ThemeMediaContainer className="media-container">
      <img
        className="media__item"
        src="./img/users/arina-volkova.jpeg"
        alt="Post Item"
      />
      <img
        className="media__item"
        src="./img/post/user-photo-2.jpeg"
        alt="Post Item"
      />
      <img
        className="media__item"
        src="./img/post/user-photo-3.jpeg"
        alt="Post Item"
      />
      <img
        className="media__item"
        src="./img/post/user-photo-4.jpeg"
        alt="Post Item"
      />
      <img
        className="media__item"
        src="./img/post/user-photo-5.jpeg"
        alt="Post Item"
      />
      <img
        className="media__item"
        src="./img/post/user-photo-6.jpeg"
        alt="Post Item"
      />
    </ThemeMediaContainer>
  );
};
