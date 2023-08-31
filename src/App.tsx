import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/", 
        element: <LoginPage /> 
      },
      {
        path: "/main", 
        element: <MainPage /> 
      }
    ])
    

  return (
    <RouterProvider router={router} />
  );
};

export default App;
