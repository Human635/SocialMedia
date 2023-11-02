import React, { forwardRef } from "react";
import { ThemeInput, ThemeInputError } from "./AppInputLogin.style";

type AppInputProps = {
  type:
    | "tel"
    | "password"
    | "username_usersurname"
    | "text"
    | "useremail"
    | "usercity";
  inputPlaceholder: string;
  name?: string;
  id?: string;
  isError?: boolean;
  errorText?: string;
};
export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  function AppInput(
    { id, name, inputPlaceholder, type, isError, errorText, ...props },
    ref
  ) {
    return (
      <>
        <ThemeInput
          id={id}
          name={name}
          type={type}
          placeholder={inputPlaceholder}
          isError={isError}
          ref={ref}
          {...props}
        />
        <ThemeInputError isError={isError}>{errorText}</ThemeInputError>
      </>
    );
  }
);
