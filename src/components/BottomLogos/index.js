import React from 'react';
import { LogosContainer, Logos } from './styles';

// Assets
import LogoCompany1 from '../../assets/logo-goresam.svg';
import LogoCompany2 from '../../assets/logo-company.svg';

const BottomLogos = () => {
    return(
        <LogosContainer>
            <Logos src={LogoCompany1} />
            <Logos src={LogoCompany2} />
        </LogosContainer>
    )
};

export default BottomLogos;