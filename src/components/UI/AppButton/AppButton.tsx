import React  from "react";
import { ThemeButton } from "./AppButton.style";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    nextPage?: string
    value: string
    isError?: boolean
    isDisabled?: boolean
}

export const AppButton = ({nextPage, type,  value, isError, isDisabled, ...props}: AppButtonProps) => {
    return(
      <ThemeButton  disabled={isDisabled}  isError={isError} { ...props}>{value}</ThemeButton>
    )
}