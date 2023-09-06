import React from "react";
import { ThemeContainerMain } from "./ContainerMain.style";

type ContainerProps = {
    children: React.ReactNode
}

export const ContainerMainPage = ({ children , ...props}: ContainerProps) => {
    return (
        <ThemeContainerMain className="container" {...props}> {children} </ThemeContainerMain>
    )
}