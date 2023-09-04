import React from "react";
import { ThemeAppHeader } from "./AppHeader.style";

type AppHeaderProps = {
    headerText: string
    type: 'h1' | 'h2' | 'h3' | 'h4' 
}

export const AppHeader = ({ headerText, type }: AppHeaderProps) => {
    const renderHeader = () => {
        switch (type) {
            case 'h1': 
                return <ThemeAppHeader><h1>{headerText}</h1></ThemeAppHeader>
            case 'h2': 
                return <ThemeAppHeader><h2>{headerText}</h2></ThemeAppHeader>
            case 'h3': 
                return <h3>{headerText}</h3>
            case 'h4': 
                return <h4>{headerText}</h4>
            default:
                return <h1>{headerText}</h1>
        }

    }
    
    return(
        renderHeader()
    )
}