import  React from "react";
import { ThemeInput } from "./AppInput.style";

type AppInputProps = {
    type: 'tel' | 'password' | 'username_usersurname'
    inputPlaceholder: string
    isError?: boolean
}

export const AppInput = ({ inputPlaceholder, type, isError }: AppInputProps) => {
    return (
        <ThemeInput type={type} placeholder={inputPlaceholder} isError={isError}/>
    )
}