import React from "react";
import "./ProfilePage.scss";
import { ContainerMainPage } from "../../components/UI/ContainerForMain/ContainerMain";
import { ProfileHeader } from "../../components/ProfilePage/ProfileHeader/ProfileHeader";
import { LeftSideProfile } from "../../components/UI/LeftSide/LeftSide";
import { Header } from "../../components/UI/Header/Header";
import { MainProfile } from "../../components/ProfilePage/MainProfile/MainProfile";
import { RightSideProfile } from "../../components/ProfilePage/RightSideProfile/RightSideProfile";

export const ProfilePage = () => {
  return (
    <ContainerMainPage>
      <Header/>
      <div className="ProfilePage">
        <LeftSideProfile />
        <ProfileHeader /> 
        <MainProfile />
        <RightSideProfile />
      </div>
    </ContainerMainPage>
  );
};
