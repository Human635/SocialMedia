import React from "react";
import { ThemeContainerMain } from "./ContainerMain.style";

type ContainerProps = {
    children: React.ReactNode
}

export const ContainerMainPage = ({ children }: ContainerProps) => {
    return (
        <ThemeContainerMain className="container"> {children} </ThemeContainerMain>
    )
}