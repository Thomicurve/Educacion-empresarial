import React, { useState } from 'react';
import { Errors, FormContainer } from '../../styles/InputsStyle';
import { ForgotContainer, Description, GoBackButtonContainer, GoBackButtonText, GoBackIcon } from './style';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// Assets
import ArrowIcon from '../../assets/arrowIcon.svg';

// Components
import CompanyLogo from '../../components/CompanyLogo';
import LoginTitles from '../../components/LoginTitles';
import EmailInput from '../../components/EmailInput';
import Buttons from '../../components/Buttons';
import BottomLogos from '../../components/BottomLogos';

const ForgotPassSchema = Yup.object().shape({
    email: Yup.string().email('El correo electrónico especificado no está en un formato válido.').required('Campo requerido'),
})

const ForgotPassword = () => {

    const forgotPassFormik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: ForgotPassSchema,

        onSubmit: (formData) => {
            console.log(formData);
        }

    })

    return (
        <ForgotContainer>
            <CompanyLogo />
            <GoBackButtonContainer>
                <Link to='/'><GoBackButtonText><GoBackIcon src={ArrowIcon} alt='Arrow icon' />Regresar</GoBackButtonText></Link>
            </GoBackButtonContainer>
            <LoginTitles titleText={"Recuperar contraseña"} />
            <Description>Ingresa tu correo electrónico para poder <br /> recuperar tu contraseña.</Description>
            <FormContainer onSubmit={forgotPassFormik.handleSubmit}>
                <EmailInput
                    handleChange={forgotPassFormik.handleChange}
                    inputPlaceHolder="mail@mail.com"
                    inputTitle={"Correo electrónico"}
                    inputID={"email"}
                    InputValues={forgotPassFormik.values.email} />
                {forgotPassFormik.errors.email && <Errors>{forgotPassFormik.errors.email}</Errors>}
                {!forgotPassFormik.errors.email &&
                    forgotPassFormik.values.email.length > 0 ?
                    <Buttons buttonText="Recuperar contraseña" active={true} /> : 
                    <Buttons buttonText="Recuperar contraseña" active={false} />}
                
            </FormContainer>
            <BottomLogos />
        </ForgotContainer>
    )
}

export default ForgotPassword;