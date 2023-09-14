import React from "react";
import { AppButton } from "../../../UI/AppButton/AppButton";

export const ButtonWrapper = () => {
  return (
    <div className="buttons-wrapper">
      <AppButton className="secondary" value="Редактировать профиль" />
      <AppButton className="primary" value="Добавить историю" />
    </div>
  );
};
