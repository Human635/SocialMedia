import React from "react";
import { ThemeParagraph } from "./AppParagraph.style";

type AppParagraphProps = {
    text : string
}

export const AppParag = ({ text }: AppParagraphProps) => {
    return(
        <ThemeParagraph>{ text }</ThemeParagraph>
    )
}