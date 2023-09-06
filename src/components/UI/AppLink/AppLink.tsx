import React from "react";
import { ThemeLink } from "./AppLink.style";

type AppLinkProps = {
    toPage: string
    value: string
}

export const AppLink = ({toPage, value}: AppLinkProps) => {
    return(
        <ThemeLink href={toPage}>{value}</ThemeLink>
    )
}