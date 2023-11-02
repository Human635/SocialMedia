import React from "react";
import { ThemeShowAll } from "./ShowAll.style";
import { Icon } from "../../../../UI/Icon/Icon";

export const ShowAll = () => {
  return (
    <ThemeShowAll className="show-all _no-select">
      <span>Показать все</span>
      <Icon name="arrow" width="12" height="6" />
    </ThemeShowAll>
  );
};
