import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI//Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInputLogin/AppInputLogin";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppLink } from "../../components/UI/AppLink/AppLink";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { User } from "../../store/userSlice";
import { useGetUserQuery, useLoginUserMutation } from "../../store/api/authApi";

// const mockUser: User = {
//   user_id: 999,
//   name: "Pavel",
//   mail: "AAAtest@getMaxListeners.com",
//   phone_number: +998900310480,
//   reg_data: new Date().toISOString(),
//   city: "Tashkent",
// };

interface LoginForm {
  useremail: string;
  userpassword: string;
}

const LoginFormSchema = yup.object({
  useremail: yup.string().required("Обязательное поле!"),
  userpassword: yup.string().required("Обязательное поле!"),
});

export const LoginPage = () => {
  // const onLoginClick = () => {
  //   dispatch()
  // }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(LoginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate()

  const [loginUser, { data: userData }] = useLoginUserMutation();

  useEffect(() => {
    if (userData?.user_id) {
      navigate('/profile')
    }
  }, [userData, navigate])

  const onLoginSubmit = async (data: LoginForm) => {
    try{
      const res = await loginUser({
      email: data.useremail,
      password: data.userpassword,
    }) 
      return res
    }catch(err) {
      throw err
    }
  };

  // const onLoginSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <AppInput
                type="useremail"
                inputPlaceholder="Ваш эмаил"
                isError={errors.useremail ? true : false}
                errorText={errors.useremail?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                inputPlaceholder="Пароль"
                isError={errors.userpassword ? true : false}
                errorText={errors.userpassword?.message}
                {...field}
              />
            )}
          />
          {/* <AppInput type="tel" inputPlaceholder="Номер телефона"/>
          <AppInput type="password" inputPlaceholder="Пароль"/> */}
          <AppButton
            type="submit"
            isDisabled={!!Object.keys(errors).length}
            value="Войти"
            // onSubmit={onLoginSubmit}
          ></AppButton>
        </form>
        <AppLink toPage="../ForgotPasswordPage" value="Забыли пароль?" />
        <RegistrationInfo />
      </div>
    </Container>
  );
};
