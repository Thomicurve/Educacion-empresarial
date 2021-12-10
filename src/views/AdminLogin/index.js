import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ForgotPassword, AdminLoginContainer } from './styles';
import { Errors, FormContainer } from '../../styles/InputsStyle';
import { Formik } from 'formik';
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

    const [buttonVisible, setButtonVisible] = useState(false);
    
    return (
        <AdminLoginContainer>
            <CompanyLogo />
            <LoginTitles titleText={"Administrador"} />
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={LoginAdminSchema}

                onSubmit={(values, props) => {
                    props.resetForm();
                    console.log(values);
                }}
            >
                {({values,handleSubmit, handleChange, handleBlur, errors}) => (
                    <FormContainer onSubmit={handleSubmit}>
                        <EmailInput 
                            handleChange={handleChange} 
                            inputPlaceHolder="mail@mail.com" 
                            inputTitle={"Correo electrónico"}
                            onBlur={handleBlur}
                            inputID={"email"} 
                            InputValues={values.email} />
                        {errors.email && <Errors>{errors.email}</Errors>}

                        <PasswordInput 
                            handleChange={handleChange} 
                            inputType='password' 
                            inputPlaceHolder="Ingresa tu contraseña" 
                            inputTitle={"Contraseña"} 
                            onBlur={handleBlur}
                            inputID={"password"}
                            InputValues={values.password}
                            />
                        {errors.password && <Errors>{errors.password}</Errors>}
                        {!errors.password && 
                        !errors.email && 
                        values.email.length > 0 && 
                        values.password.length > 0 ? 
                        setButtonVisible(true) : setButtonVisible(false)}
                        <Link to="/recuperar-contrasena"><ForgotPassword>Olvidé mi contraseña</ForgotPassword></Link>
                        <Buttons buttonText="Iniciar sesión" active={buttonVisible} />
                    </FormContainer>
                )}

            </Formik>
            <BottomLogos />
        </AdminLoginContainer>
    )
}

export default AdminLogin;