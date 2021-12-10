import React from 'react';
import { LogoContainer, Title } from './styles';

// Assets
import logoSquare from '../../assets/logoSquare.svg';

const CompanyLogo = () => {
    return(
        <LogoContainer>
            <img src={logoSquare} alt='Logo Educación empresarial' />
            <Title>Educación<br/>Empresarial</Title>
        </LogoContainer>
    )
};

export default CompanyLogo;