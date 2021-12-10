import React, {useState} from 'react';
import { Errors, FormContainer } from '../../styles/InputsStyle';
import { ForgotContainer, Description, GoBackButtonContainer, GoBackButtonText, GoBackIcon } from './style';
import { Formik } from 'formik';
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
    const [buttonVisible, setButtonVisible] = useState(false);

    return (
        <ForgotContainer>
            <CompanyLogo />
            <GoBackButtonContainer>
                <Link to='/'><GoBackButtonText><GoBackIcon src={ArrowIcon} alt='Arrow icon' />Regresar</GoBackButtonText></Link>
            </GoBackButtonContainer> 
            <LoginTitles titleText={"Recuperar contraseña"} />
            <Description>Ingresa tu correo electrónico para poder <br/> recuperar tu contraseña.</Description>
            <Formik
                initialValues={{
                    email: ''
                }}

                validationSchema={ForgotPassSchema}

                onSubmit={(values, props) => {
                    props.resetForm();
                    console.log(values);
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur, errors }) => (
                    <FormContainer onSubmit={handleSubmit}>
                        <EmailInput
                            handleChange={handleChange}
                            inputPlaceHolder="mail@mail.com"
                            inputTitle={"Correo electrónico"}
                            onBlur={handleBlur}
                            inputID={"email"}
                            InputValues={values.email} />
                        {errors.email && <Errors>{errors.email}</Errors>}
                        {!errors.email && 
                        values.email.length > 0 ?
                        setButtonVisible(true) : setButtonVisible(false)}
                        <Buttons buttonText="Recuperar contraseña" active={buttonVisible} />
                    </FormContainer>
                )}

            </Formik>
            <BottomLogos />
        </ForgotContainer>
    )
}

export default ForgotPassword;