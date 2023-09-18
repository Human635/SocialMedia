import React from "react";
import "./MainPage.scss";
import { ContainerMainPage } from "../../components/UI/ContainerForMain/ContainerMain";
import { Header } from "../../components/UI/Header/Header";
import { LeftSideProfile } from "../../components/UI/LeftSide/LeftSide";
import { RightSide } from "../../components/MainPage/RightSide/RightSide";
import { MainSide } from "../../components/MainPage/MainMain/Main";

export const MainPage = () => {

  return (
    <ContainerMainPage>
      <Header/>
      <div className="MainPage">
        <LeftSideProfile />
        <MainSide/>
        <RightSide />
      </div>
    </ContainerMainPage>
  );
};
