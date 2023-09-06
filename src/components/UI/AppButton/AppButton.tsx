import React  from "react";
import { ThemeButton } from "./AppButton.style";
import { type } from "os";

type AppButtonProps = {
    type?: 'submit'
    nextPage?: string
    value: string
    isError?: boolean
    isDisabled?: boolean
}

export const AppButton = ({nextPage, type,  value, isError, isDisabled, ...props}: AppButtonProps) => {
    return(
      <ThemeButton type={type} disabled={isDisabled}  isError={isError} { ...props}>{value}</ThemeButton>
    )
}