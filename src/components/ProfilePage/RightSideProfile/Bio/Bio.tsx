import React from "react";
import { ThemeBio } from "./Bio.style";
import { AppButton } from "../../../UI/AppButton/AppButton";
import { BioDataItem } from "./BioDataItem";
import { BioInfoItem } from "./BioInfoItem";
import { ButtonWrapper } from "./ButtonWrapper";

export const Bio = () => {
  return (
    <ThemeBio className="bio">
        <BioDataItem />
        <BioInfoItem />
        <ButtonWrapper />
    </ThemeBio>
  );
};
