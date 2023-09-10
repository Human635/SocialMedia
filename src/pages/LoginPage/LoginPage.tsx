import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI//Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInputLogin/AppInputLogin";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { yupResolver } from '@hookform/resolvers/yup'
import { AppLink } from "../../components/UI/AppLink/AppLink";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { User } from "../../store/userSlice";

const mockUser: User = {
  user_id: 999,
  name: 'Pavel',
  mail: 'AAAtest@getMaxListeners.com',
  phone_number: +998900310480,
  reg_data: new Date().toISOString(),
  city: 'Tashkent'
}

interface LoginForm {
    userphone: string
    userpassword: string
}

const LoginFormSchema = yup.object({
    userphone:yup.string().required('Обязательное поле!'),
    userpassword:yup.string().required('Обязательное поле!')
})

export const LoginPage = () => {

  const user = useSelector((state: RootState) => state.userSlice.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLoginClick = () => {
    dispatch(changeUser(mockUser))
  }

  useEffect(() => {
    if (user?.user_id) {
      navigate('/profile')
    }
  }, [user, navigate])

  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver:yupResolver(LoginFormSchema),
    defaultValues: {
        userphone: '',
        userpassword: ''
    }
  })

  const onLoginSubmit = (data: any) => console.log(data)


  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Авторизация"/>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller 
              name='userphone' 
              control={control} 
              render={({ field }) => 
              <AppInput 
                  type="tel" 
                  inputPlaceholder="Номер телефона" 
                  isError={errors.userphone ? true : false}
                  errorText={errors.userphone?.message}
                  {...field}
              />}
          />
          <Controller 
              name='userpassword' 
              control={control} 
              render={({ field }) => 
              <AppInput 
                  type="password" 
                  inputPlaceholder="Пароль" 
                  isError={errors.userpassword ? true : false}
                  errorText={errors.userpassword?.message}
                  {...field}
              />}
          />
          {/* <AppInput type="tel" inputPlaceholder="Номер телефона"/>
          <AppInput type="password" inputPlaceholder="Пароль"/> */}
          <AppButton type="submit" isDisabled={!!Object.keys(errors).length}  value="Войти" onClick={onLoginClick}></AppButton>
        </form>
        <AppLink toPage="../ForgotPasswordPage" value="Забыли пароль?"/>
        <RegistrationInfo />
      </div>
    </Container>
  );
};
