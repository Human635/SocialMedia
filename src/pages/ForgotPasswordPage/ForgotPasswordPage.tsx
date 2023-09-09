import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { Container } from "../../components/UI/Container/Container";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppParag } from "../../components/UI/AppParagraph/AppParagraph";
import { AppInput } from "../../components/UI/AppInputLogin/AppInputLogin";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { yupResolver } from '@hookform/resolvers/yup'

interface ForgotPasswordForm {
    userphone: string
}

const ForgotPasswordFormSchema = yup.object({
    userphone:yup.string().required('Обязательное поле!'),
})


export const ForgotPasswordPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm>({
        resolver:yupResolver(ForgotPasswordFormSchema),
        defaultValues: {
            userphone: '',
        }
    })
    
    const onForgotPasswordSubmit = (data: any) => console.log(data)

    return(
        <Container>
            <div className="ForgotPasswordPage">
                <AppHeader type="h1" headerText="Забыли пароль?"/>
                <AppParag text="Укажите свой номер телефона, чтобы получить код для сброса пароля."/>
                <form onSubmit={handleSubmit(onForgotPasswordSubmit)}>
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
                    {/* <AppInput type="tel" inputPlaceholder="Номер телефона"/> */}
                    <AppButton type="submit" isDisabled={!!Object.keys(errors).length} value="Отправить"/>
                </form>
            </div> 
        </Container>
    )
    }