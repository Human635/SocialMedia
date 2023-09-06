import React from "react";
import { ThemeParagraph } from "./AppParagraph.style";

type AppParagraphProps = {
    text : string
}

export const AppParag = ({ text, ...props }: AppParagraphProps) => {
    return(
        <ThemeParagraph {...props}>{ text }</ThemeParagraph>
    )
}