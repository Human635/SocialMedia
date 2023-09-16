import React from "react";
import { AppButton } from "../../../UI/AppButton/AppButton";
import { ThemeButtonWrapper } from "./ButtonWrapper.style";

export const ButtonWrapper = () => {
  return (
    <ThemeButtonWrapper className="buttons-wrapper">
      <AppButton className="secondary" value="Редактировать профиль" />
      <AppButton className="primary" value="Добавить историю" />
    </ThemeButtonWrapper>
  );
};
