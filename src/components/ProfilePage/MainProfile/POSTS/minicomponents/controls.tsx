import React from "react";
import { Themecontrols } from "./controls.style";
import { Icon } from "../../../../UI/Icon/Icon";

export const UserPosts__controls = () => {
  return (
    <Themecontrols className="UserPosts__controls">
      <div className="tabs">
        <div className="tab _no-select photos _active">
          <Icon name="photo" width="25" height="25" />

          <span>Фото</span>
        </div>
        <div className="tab _no-select videos">
          <Icon name="video" width="25" height="25" />

          <span>Видео</span>
        </div>
      </div>
      <div className="upload-media _no-select">
        <svg
          className="icon icon-upload"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <g>
            <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
          </g>
        </svg>
        <span>Загрузить фото</span>
      </div>
    </Themecontrols>
  );
};
