import React from "react";
import { AppButton } from "../../../UI/AppButton/AppButton";
import { ThemeButtonWrapper } from "./ButtonWrapper.style";

export const ButtonWrapper = () => {
  return (
    <ThemeButtonWrapper className="bio__buttons">
      <AppButton className="primary" value="Подробнее"></AppButton>
      <AppButton className="secondary" value="Редактировать"></AppButton>
    </ThemeButtonWrapper>
  );
};
