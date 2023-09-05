import  React from "react";
import { ThemeInput, ThemeInputError } from "./AppInputLogin.style";

type AppInputProps = {
    type: 'tel' | 'password' | 'username_usersurname' | 'text'
    inputPlaceholder: string
    name?: string
    id?: string
    isError?: boolean
    errorText?: string
}
export const AppInput = ({id, name, inputPlaceholder, type, isError, errorText, ...props }: AppInputProps) => {
    return (
        <>
            <ThemeInput 
            id={id} 
            name={name} 
            type={type} 
            placeholder={inputPlaceholder} 
            isError={isError}
            {...props}/>
            <ThemeInputError isError={isError}>
                {errorText}
            </ThemeInputError>
        </>
    )
}