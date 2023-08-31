import React from "react";
import "./LoginPage.scss";
import { Container } from "../../components/UI/AppHeader/Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/Header/AppHeader";
import { AppInput } from "../../components/UI/AppHeader/AppInput/AppInput";
import { RegistrationInfo } from "../../components/UI/AppHeader/RegistrationInfo/RegistrationInfo";

export const LoginPage = () => {
  return (
    <Container>

    <div className="LoginPage">
      <AppHeader type="h1" headerText="Авторизация"/>
      <form action="#">
        <AppInput type="tel" inputPlaceholder="Номер телефона"/>
        <AppInput type="password" inputPlaceholder="Пароль"/>
        <button>Войти</button>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo />
    </div>
    </Container>
  );
};
