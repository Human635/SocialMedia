import React from "react";
import { Container } from "../../components/UI//Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInputLogin/AppInputLogin";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Авторизация"/>
        <form action="#">
          <AppInput type="tel" inputPlaceholder="Номер телефона"/>
          <AppInput type="password" inputPlaceholder="Пароль"/>
          <AppButton value="Войти"></AppButton>
        </form>
        <Link to="../ForgotPasswordPage">Забыли пароль?</Link>
        <RegistrationInfo />
      </div>
    </Container>
  );
};
