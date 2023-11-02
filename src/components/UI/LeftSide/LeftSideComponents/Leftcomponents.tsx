import React from "react";
import { ThemeLeftcomponents } from "./LeftComponents.style";
import { Icon } from "../../Icon/Icon";

export const LeftComponents = () => {
  return (
    <ThemeLeftcomponents className="Navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Icon name="profile" width="25" height="25"></Icon>
          <p className="item__name">Моя страница</p>
          <span className="Badge">1</span>
        </li>
        <li className="navbar__item">
          <Icon name="news" width="25" height="25"></Icon>
          <p className="item__name">Новости</p>
          <span className="Badge">2</span>
        </li>
        <li className="navbar__item">
          <Icon name="chat" width="25" height="25"></Icon>

          <p className="item__name">Чаты</p>
          <span className="Badge">3</span>
        </li>
        <li className="navbar__item">
          <Icon name="friends" width="25" height="25"></Icon>

          <p className="item__name">Друзья</p>
          <span className="Badge">4</span>
        </li>
        <li className="navbar__item">
          <Icon name="group" width="25" height="25"></Icon>

          <p className="item__name">Группы</p>
          <span className="Badge">5</span>
        </li>
        <li className="navbar__item">
          <Icon name="photo" width="25" height="25"></Icon>

          <p className="item__name">Фотографии</p>
          <span className="Badge">6</span>
        </li>
        <li className="navbar__item">
          <Icon name="video" width="25" height="25"></Icon>

          <p className="item__name">Видео</p>
          <span className="Badge">7</span>
        </li>
        <li className="navbar__item">
          <Icon name="play" width="25" height="25"></Icon>

          <p className="item__name">Музыка</p>
          <span className="Badge">8</span>
        </li>
        <li className="navbar__item">
          <Icon name="mark" width="25" height="25"></Icon>

          <p className="item__name">Сохраненное</p>
          <span className="Badge">9</span>
        </li>
        <li className="navbar__item">
          <Icon name="more" width="25" height="25"></Icon>

          <p className="item__name">Другое</p>
          <span className="Badge">100</span>
        </li>
      </ul>
    </ThemeLeftcomponents>
  );
};
