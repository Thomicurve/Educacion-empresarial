import React from 'react';
import { SectionContainer, TitleSection, Icon, TextContainer } from './style';
import topBarIcon from '../../assets/HomeIcons/topBarIcon.svg'

const TopSectionBar = ({currentSection}) => {

    return (
        <SectionContainer>
            <TextContainer><TitleSection>{currentSection == 'Configuracion' ? 'Configuración' : currentSection}</TitleSection> . Inicio <Icon src={topBarIcon} alt="Icono de mayor que" /> {currentSection == 'Configuracion' ? 'Configuración' : currentSection}</TextContainer>
        </SectionContainer>
    )
}

export default TopSectionBar;