import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ForgotPassword, AdminLoginContainer } from './styles';
import { Errors, FormContainer } from '../../styles/InputsStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Components
import CompanyLogo from '../../components/CompanyLogo';
import LoginTitles from '../../components/LoginTitles';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Buttons from '../../components/Buttons';
import BottomLogos from '../../components/BottomLogos';

const LoginAdminSchema = Yup.object().shape({
    email: Yup.string().email('El correo electrónico especificado no está en un formato válido.').required('Campo requerido'),
    password: Yup.string().required('Campo requerido')
})

const AdminLogin = () => {

    const adminLoginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginAdminSchema,

        onSubmit: (formData) => {
            console.log(formData);
        }

    })

    return (
        <AdminLoginContainer>
            <CompanyLogo />
            <LoginTitles titleText={"Administrador"} />
            <FormContainer onSubmit={adminLoginFormik.handleSubmit}>
                <EmailInput
                    handleChange={adminLoginFormik.handleChange}
                    inputPlaceHolder="mail@mail.com"
                    inputTitle={"Correo electrónico"}
                    inputID={"email"}
                    InputValues={adminLoginFormik.values.email} />
                {adminLoginFormik.errors.email && <Errors>{adminLoginFormik.errors.email}</Errors>}

                <PasswordInput
                    handleChange={adminLoginFormik.handleChange}
                    inputType='password'
                    inputPlaceHolder="Ingresa tu contraseña"
                    inputTitle={"Contraseña"}
                    inputID={"password"}
                    InputValues={adminLoginFormik.values.password}
                    hasEye={true}
                />
                {adminLoginFormik.errors.password && <Errors>{adminLoginFormik.errors.password}</Errors>}
                <Link to="/recuperar-contrasena"><ForgotPassword>Olvidé mi contraseña</ForgotPassword></Link>
                
                {!adminLoginFormik.errors.password &&
                    !adminLoginFormik.errors.email &&
                    adminLoginFormik.values.email.length > 0 &&
                    adminLoginFormik.values.password.length > 0 ?
                    <Buttons buttonText="Iniciar sesión" active={true} /> :
                    <Buttons buttonText="Iniciar sesión" active={false} />}
            </FormContainer>
            <BottomLogos />
        </AdminLoginContainer>
    )
}

export default AdminLogin;