import React from "react";
import { ThemeContainer } from "./Container.style";

type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ children , ...props}: ContainerProps) => {
    return (
        <ThemeContainer className="container" {...props}> {children} </ThemeContainer>
    )
}