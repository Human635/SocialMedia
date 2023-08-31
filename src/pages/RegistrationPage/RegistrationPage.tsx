import React from "react";
import "./RegistrationPage.scss"
import { Container } from "../../components/UI/Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { BackInfo } from "../../components/BackInfo/BackInfo"

export const RegistrationPage = () => {
    return(
        <Container>
            <div className="RegistrationPage">
                <AppHeader type="h1" headerText="Регистрация" />
                <form action="#">
                    <AppInput type="username_usersurname" inputPlaceholder="Имя и фамилие"/>
                    <AppInput type="tel" inputPlaceholder="Номер телефона"/>
                    <AppInput type="password" inputPlaceholder="Пароль"/>
                    <button>Зарегистрироваться</button>
                </form>
                <BackInfo />
            </div>
        </Container>
    )
}