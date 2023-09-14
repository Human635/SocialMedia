import React from "react";
import { ThemeUserParametrs } from "./UserParameters.style";

export const UserParametrs = () => {
  return (
    <ThemeUserParametrs className="user__info">
      <div className="parameter">
        <span className="key">Друзья</span>
        <span className="value">130</span>
      </div>
      <div className="parameter">
        <span className="key">Подписчики</span>
        <span className="value">923</span>
      </div>
      <div className="parameter">
        <span className="key">Подписки</span>
        <span className="value">246</span>
      </div>
    </ThemeUserParametrs>
  );
};
