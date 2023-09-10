import React from "react";

type AppLinkMainProps ={
    toPage: string
    value: string
}

export const AppLinkMain = ({ toPage, value }: AppLinkMainProps) => {
    return(
        <a href={toPage}>{value}</a>
    )
}