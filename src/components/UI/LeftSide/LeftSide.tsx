import React from "react";
import { ThemeLeftMenu } from "./LeftSide.style";
import { LeftComponents } from "./LeftSideComponents/Leftcomponents";
import { LeftSubs } from "./LeftSideComponents/LeftSubs";

export const LeftSideProfile = () => {
  return (
    <ThemeLeftMenu className="LeftSide">
      <LeftComponents />
      <LeftSubs />
    </ThemeLeftMenu>
  );
};
