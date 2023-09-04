import React  from "react";
import { ThemeButton } from "./AppButton.style";

type AppButtonProps = {
    nextPage?: string
    value: string
    isError?: boolean
}

export const AppButton = ({nextPage, value, isError}: AppButtonProps) => {
    return(
      <ThemeButton  isError={isError}>{value}</ThemeButton>
    )
}