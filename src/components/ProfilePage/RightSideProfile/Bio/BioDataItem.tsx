import React from "react";
import { ThemeBioData } from "./BioDataItem.style";
import { Icon } from "../../../UI/Icon/Icon";

export const BioDataItem = () => {
  return (
    <ThemeBioData className="bio__data">
      <div className="data__item">
        <Icon name="birthday" width="21" height="24" />
        <p className="main__text">
          День рождения: <span>9 августа</span>
        </p>
      </div>
      <div className="data__item">
        <Icon name="location" width="19" height="24" />
        <p className="main__text">
          Город: <span>Ташкент</span>
        </p>
      </div>
      <div className="data__item">
        <Icon name="heart" width="23" height="23" />
        <p className="main__text">
          Статус: <span>Не указано</span>
        </p>
      </div>
    </ThemeBioData>
  );
};
