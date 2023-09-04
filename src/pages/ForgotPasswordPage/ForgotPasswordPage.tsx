import React from "react";
import { Container } from "../../components/UI/Container/Container";
import "./ForgotPasswordPage.scss";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppParag } from "../../components/UI/AppParagraph/AppParagraph";
import { AppInput } from "../../components/UI/AppInputLogin/AppInputLogin";
import { AppButton } from "../../components/UI/AppButton/AppButton";


export const ForgotPasswordPage = () => {
    return(
        <Container>
            <div className="ForgotPasswordPage">
                <AppHeader type="h1" headerText="Забыли пароль?"/>
                <AppParag text="Укажите свой номер телефона, чтобы получить код для сброса пароля."/>
                <form action="#">
                    <AppInput type="tel" inputPlaceholder="Номер телефона"/>
                    <AppButton value="Отправить"/>
                </form>
            </div> 
        </Container>
    )
}