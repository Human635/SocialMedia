import  React from "react";
import { ThemeInput } from "./AppInputLogin.style";

type AppInputProps = {
    type: 'tel' | 'password' | 'username_usersurname' | 'text'
    inputPlaceholder: string
    name?: string
    id?: string
    isError?: boolean
}
export const AppInput = ({id, name, inputPlaceholder, type, isError }: AppInputProps) => {
    return (
        <ThemeInput id={id} name={name} type={type} placeholder={inputPlaceholder} isError={isError}/>
    )
}