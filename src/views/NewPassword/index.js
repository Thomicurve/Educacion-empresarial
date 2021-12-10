import React, { useState } from 'react';
import { Errors, FormContainer } from '../../styles/InputsStyle';
import { Description, NewPassContainer } from './style';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import CompanyLogo from '../../components/CompanyLogo';
import LoginTitles from '../../components/LoginTitles';
import PasswordInput from '../../components/PasswordInput';
import Buttons from '../../components/Buttons';
import BottomLogos from '../../components/BottomLogos';

const NewPasswordSchema = Yup.object().shape({
    password: Yup
        .string()
        .required('Campo requerido')
        .min(8, 'La nueva contraseña debe contener al menos 8 caracteres')
        .matches(/^(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡!#%&=¿+.,:;\-_]){1})(?=(?:.*[0-9]){1})\S/g, 'La nueva contraseña debe contener al menos un número,una letra y un caracter especial')
        .oneOf([Yup.ref('password')], 'Las contraseñas deben ser idénticas'),
    repeated_password: Yup
        .string()
        .required('Campo requerido')
        .oneOf([Yup.ref('password')], 'Las contraseñas deben ser idénticas')
});

const NewPassword = () => {

    const newPassFormik = useFormik({
        initialValues: {
            password: '',
            repeated_password: ''
        },
        validationSchema: NewPasswordSchema,

        onSubmit: (formData) => {
            console.log(formData);
        }

    })

    return (
        <NewPassContainer>
            <CompanyLogo />
            <LoginTitles titleText={"Recuperar contraseña"} />
            <Description>Por tu seguridad ingresa ingresa 8 caracteres entre mayúculas,
                minúsculas y al menos un dígito.</Description>
            <FormContainer onSubmit={newPassFormik.handleSubmit}>
                <PasswordInput
                    handleChange={newPassFormik.handleChange}
                    inputPlaceHolder="Ingresa tu contraseña"
                    inputTitle={"Ingresa la nueva contraseña"}
                    inputID={"password"}
                    hasEye={false}
                />
                {newPassFormik.errors.password && <Errors>{newPassFormik.errors.password}</Errors>}

                <PasswordInput
                    handleChange={newPassFormik.handleChange}
                    inputPlaceHolder="Repite la contraseña"
                    inputTitle={"Ingresa nuevamente la contraseña"}
                    inputID={"repeated_password"}
                    InputValues={newPassFormik.values.repeated_password}
                    hasEye={false}
                />
                {newPassFormik.errors.repeated_password && <Errors>{newPassFormik.errors.repeated_password}</Errors>}
                {!newPassFormik.errors.password &&
                    !newPassFormik.errors.repeated_password &&
                    newPassFormik.values.password.length > 0 &&
                    newPassFormik.values.repeated_password.length > 0 ?
                    <Buttons buttonText="Recuperar contraseña" active={true} /> :
                    <Buttons buttonText="Recuperar contraseña" active={false} />}
            </FormContainer>
            <BottomLogos />
        </NewPassContainer>
    )
}

export default NewPassword;