import React from "react";
import { Container } from "../../components/UI/Container/Container";
import "./ForgotPasswordPage.scss";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppParag } from "../../components/UI/AppParagraph/AppParagraph";
import { AppInput } from "../../components/UI/AppInput/AppInput";

export const ForgotPasswordPage = () => {
    return(
        <Container>
            <div className="ForgotPasswordPage">
                <AppHeader type="h1" headerText="Забыли пароль?"/>
                <AppParag text="Укажите свой номер телефона, чтобы получить код для сброса пароля."/>
                <form action="#">
                    <AppInput type="tel" inputPlaceholder="Номер телефона"/>
                    <button>Отправить</button>
                </form>
            </div> 
        </Container>
    )
}