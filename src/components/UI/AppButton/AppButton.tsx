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

export const AppButton = ({nextPage, type,  value, isError, isDisabled}: AppButtonProps) => {
    return(
      <ThemeButton type={type} disabled={isDisabled}  isError={isError}>{value}</ThemeButton>
    )
}