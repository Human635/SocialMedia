import React from "react";
import "./LoginPage.scss";
import { Container } from "../../components/UI//Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI//AppInput/AppInput";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { Link } from "react-router-dom";

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
        <Link to="../ForgotPasswordPage">Забыли пароль?</Link>
        <RegistrationInfo />
      </div>
    </Container>
  );
};
