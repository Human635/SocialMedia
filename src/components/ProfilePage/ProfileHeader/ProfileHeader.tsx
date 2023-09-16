import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ThemeProfileHeader } from "./ProfileHeader.style";
import { AppButton } from "../../UI/AppButton/AppButton";
import { UserAvatar } from "./UserAvatar/UserAvatar";
import { UserParametrs } from "./UserParametr/UserParametrs";
import { UserBackground } from "./UserBackround/UserBackground";
import { ButtonWrapper } from "./ButtonWrapper/ButtonWrapper";

export const ProfileHeader = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const [avatar, setAvatar] = useState("./img/users/denis-frolov.jpeg");
  const [background, setBackground] = useState('https://i.gifer.com/xK.gif');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const formData = new FormData();

      const file = event.target.files[0];
      formData.append("photo_file", file);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        setAvatar(reader.result as string);
      };

      reader.onerror = function () {
        throw new Error("Файл не загружен");
      };
    }
  };

  const handleBackImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files?.[0]) {
      const formData = new FormData();

      const file = event.target.files[0];
      formData.append("background_file", file);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        setBackground(reader.result as string);
      };

      reader.onerror = function () {
        throw new Error("Файл не загружен");
      };
    }
  };

  return (
    <ThemeProfileHeader className="ProfileHeader">
      <div className="user__block">
        <UserAvatar
          userName="UserPhoto"
          src={avatar}
          onAvatarClick={handleImageUpload}
        />
        <div className="user__description">
          <h1 className="user__name">{user?.name}</h1>
          <UserParametrs />
        </div>
        <ButtonWrapper />
      </div>
      <UserBackground
        defaultBackground="default"
        background={background}
        onIconClick={handleBackImageUpload}
      />
    </ThemeProfileHeader>
  );
};
