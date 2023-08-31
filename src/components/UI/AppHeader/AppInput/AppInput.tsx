import  React from "react";

type AppInputProps = {
    type: 'tel' | 'password'
    inputPlaceholder: string
}

export const AppInput = ({ inputPlaceholder, type }: AppInputProps) => {
    return (
        <input type={type} placeholder={inputPlaceholder} />
    )
}