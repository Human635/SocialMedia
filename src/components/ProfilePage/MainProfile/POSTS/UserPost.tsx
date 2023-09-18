import React from "react";
import { ThemeUserPost } from "./UserPost.style";
import { UserPosts__controls } from "./minicomponents/controls";
import { MediaContainer } from "./minicomponents/media-container";
import { ShowAll } from "./minicomponents/ShowAll";

export const UserPost = () => {
  return (
    <ThemeUserPost className="UserPosts">
      <UserPosts__controls />
      <MediaContainer />
      <ShowAll />
    </ThemeUserPost>
  );
};
