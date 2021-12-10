import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, ForgotPassword } from './styles';

// Components
import CompanyLogo from '../../components/CompanyLogo';
import LoginTitles from '../../components/LoginTitles';
import InputFields from '../../components/InputsFields';
import Buttons from '../../components/Buttons';

const AdminLogin = () => {
    return(
        <div>
            <CompanyLogo/>
            <LoginTitles titleText={"Administrador"}/>
            <FormContainer>
                <InputFields inputType='email' inputPlaceHolder="mail@mail.com" inputTitle={"Correo electrónico"} />
                <InputFields inputType='password' inputPlaceHolder="Ingresa tu contraseña" inputTitle={"Contraseña"} />
                <Link to="/recuperar-contraseña"><ForgotPassword>Olvidé mi contraseña</ForgotPassword></Link>
                <Buttons buttonText="Iniciar sesión" active={false}/>
            </FormContainer>
        </div>
    )
}

export default AdminLogin;