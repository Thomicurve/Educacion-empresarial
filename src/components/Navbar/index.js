import React from 'react';
import { NavContainer, LogoContainer, LogoTitle, UserContainer, UserDataContainer, UserName, UserRol, UserPhoto, NotificationsContainer } from './style';

// Assets
import logoSquare from '../../assets/logoSquare.svg';
import NotificationIcon from '../../assets/NotificationIcon.svg';
import personPhoto from '../../assets/personPhoto.svg';

const Navbar = () => {
    return (
        <NavContainer>
            <LogoContainer>
                <img src={logoSquare} alt='Logo de Educación Empresarial'/>
                <LogoTitle>Educación<br/>Empresarial</LogoTitle>
            </LogoContainer>
            <UserContainer>
                <NotificationsContainer>
                    <img src={NotificationIcon} alt="Ícono de Notificación"/>
                </NotificationsContainer>
                <UserPhoto src={personPhoto} alt='Foto de usuario'/>
                <UserDataContainer>
                    <div>
                        <UserName>Thomas Curvelo</UserName>
                        <UserRol>Super Admin</UserRol>
                    </div>
                </UserDataContainer>
            </UserContainer>
        </NavContainer>
    )
}

export default Navbar;