import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { ForgotPassword, AdminLoginContainer } from './styles';
import { Errors, FormContainer, ButtonErrors } from '../../styles/InputsStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Auth
import AuthContext from '../../context/AuthContext';
import useCookies from '../../hooks/useCookies';
import useRoutesAuth from '../../hooks/useRoutesAuth';

// Components
import CompanyLogo from '../../components/CompanyLogo';
import LoginTitles from '../../components/LoginTitles';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import Buttons from '../../components/Buttons';
import BottomLogos from '../../components/BottomLogos';

// Services
import { Login } from '../../services/Admin';

// FORM SCHEMA
const LoginAdminSchema = Yup.object().shape({
    email: Yup.string().email('El correo electrónico especificado no está en un formato válido.').required('Campo requerido'),
    password: Yup.string().required('Campo requerido')
})

const AdminLogin = () => {
    const [loginError, setLoginError] = useState({error: false, message: ''});

    // Context
    const { setCookie } = useCookies()
    const { setToken } = useContext(AuthContext); 
    const navigate = useNavigate();
    const { isLogged } = useRoutesAuth('/home/users');

    useEffect(() => {
        isLogged();
    }, [])


    // FORM
    const handleSubmit = async ({email, password}) => {
        const result = await Login(email, password);

        if(!result) return setLoginError({error: true, message: 'La dirección de correo electrónico o contraseña que has introducido no son correctas'});

        else {
            setLoginError({error: false, message: ''});
            setCookie('userID', '2');
            setToken('2');
            navigate('/home/users');
        } 
    }

    const adminLoginFormik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: LoginAdminSchema,
        onSubmit: (formData) => {
            handleSubmit(formData);
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
                <Link to="/recover-password"><ForgotPassword>Olvidé mi contraseña</ForgotPassword></Link>
                
                {!adminLoginFormik.errors.password &&
                    !adminLoginFormik.errors.email &&
                    adminLoginFormik.values.email.length > 0 &&
                    adminLoginFormik.values.password.length > 0 ?
                    <Buttons buttonText="Iniciar sesión" active={true} /> :
                    <Buttons buttonText="Iniciar sesión" active={false} />}
                { loginError.error && <ButtonErrors>{loginError.message}</ButtonErrors> }
            </FormContainer>
            <BottomLogos />
        </AdminLoginContainer>
    )
}

export default AdminLogin;