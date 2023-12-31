import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { Container } from "../../components/UI/Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInputLogin/AppInputLogin";
import { BackInfo } from "../../components/BackInfo/BackInfo"
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { yupResolver } from '@hookform/resolvers/yup'
import { useAddUserMutation } from "../../store/api/authApi";

interface RegistrationForm {
    username: string
    userphone: string
    userpassword: string
    useremail: string
    usercity: string
}

const RegistrationFormSchema = yup.object({
    username:yup.string().required('Обязательное поле!'),
    userphone:yup.string().required('Обязательное поле!'),
    userpassword:yup.string().required('Обязательное поле!'),
    useremail:yup.string().required('Обязательное поле!'),
    usercity:yup.string().required('Обязательное поле!')
})

export const RegistrationPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<RegistrationForm>({
        resolver:yupResolver(RegistrationFormSchema),
        defaultValues: {
            username: '',
            userphone: '',
            useremail: '',
            usercity: '',
            userpassword: ''
        }
    })

    const [registeruser] = useAddUserMutation()

    const onRegistrationSubmit = (data: RegistrationForm) => {
        registeruser({
            name: data.username,
            phone_number: data.userphone,
            password: data.userpassword,
            email: data.useremail,
            user_city: data.usercity
        })
    }

    return(
        <Container>
            <div className="RegistrationPage">
                <AppHeader type="h1" headerText="Регистрация" />
                <form onSubmit={handleSubmit(onRegistrationSubmit)}>
                    <Controller 
                        name='username' 
                        control={control} 
                        render={({ field }) => 
                        <AppInput 
                            type="username_usersurname" 
                            inputPlaceholder="Имя и фамилие" 
                            isError={errors.username ? true : false}
                            errorText={errors.username?.message}
                            {...field}
                        />}
                    />
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
                    <Controller 
                        name='useremail' 
                        control={control} 
                        render={({ field }) => 
                        <AppInput 
                            type="useremail" 
                            inputPlaceholder="Ваш эмаил" 
                            isError={errors.userphone ? true : false}
                            errorText={errors.userphone?.message}
                            {...field}
                        />}
                    />
                    <Controller 
                        name='usercity' 
                        control={control} 
                        render={({ field }) => 
                        <AppInput 
                            type="usercity" 
                            inputPlaceholder="Город" 
                            isError={errors.userpassword ? true : false}
                            errorText={errors.userpassword?.message}
                            {...field}
                        />}
                    />
                    {/*<AppInput type="username_usersurname" inputPlaceholder="Имя и фамилие"/>
                    <AppInput type="tel" inputPlaceholder="Номер телефона"/>
                    <AppInput type="password" inputPlaceholder="Пароль"/> */}
                    <AppButton type="submit" isDisabled={!!Object.keys(errors).length} value="Зарегистрироваться"/>
                </form>
                <BackInfo />
            </div>
        </Container>
    )
}