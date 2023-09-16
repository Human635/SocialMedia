import React from "react";
import { ThemeBioInfo } from "./bioInfoItem.style";

export const BioInfoItem = () => {
  return (
    <ThemeBioInfo className="bio__info">
      <p className="main__text education">Образование</p>
      <p className="secondary__text education">
        Филиал университета нефти и газа им. Губкина в Ташкенте
      </p>
      <p className="main__text activity">Деятельность</p>
      <p className="secondary__text activity">Фотограф</p>
      <p className="main__text hobby">Хобби</p>
      <p className="secondary__text hobby">Танцы</p>
    </ThemeBioInfo>
  );
};
