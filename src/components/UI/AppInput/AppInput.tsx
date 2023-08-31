import  React from "react";

type AppInputProps = {
    type: 'tel' | 'password' | 'username_usersurname'
    inputPlaceholder: string
}

export const AppInput = ({ inputPlaceholder, type }: AppInputProps) => {
    return (
        <input type={type} placeholder={inputPlaceholder} />
    )
}