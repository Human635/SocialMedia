import React  from "react";
import { ThemeButton } from "./AppButton.style";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    nextPage?: string
    value: string
    isError?: boolean
    isDisabled?: boolean
    className?: string
}

export const AppButton = ({nextPage, type, className,  value, isError, isDisabled, ...props}: AppButtonProps) => {
    return(
      <ThemeButton className={className}  disabled={isDisabled}  isError={isError} { ...props}>{value}</ThemeButton>
    )
}