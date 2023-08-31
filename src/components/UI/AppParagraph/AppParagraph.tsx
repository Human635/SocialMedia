import React from "react";

type AppParagraphProps = {
    text : string
}

export const AppParag = ({ text }: AppParagraphProps) => {
    return(
        <p>{ text }</p>
    )
}