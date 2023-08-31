import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/LoginPage", 
        element: <LoginPage /> 
      },
      {
        path: "/main", 
        element: <MainPage /> 
      },
      {
        path: "/ForgotPasswordPage",
        element: <ForgotPasswordPage />
      },
      {
        path: "/RegistrationPage",
        element: <RegistrationPage />
      }
    ])
    

  return (
    <RouterProvider router={router} />
  );
};

export default App;
