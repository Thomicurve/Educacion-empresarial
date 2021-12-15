import React, { useContext, memo } from 'react';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';
import { LinkText, NavContainer, LinksItems, LogOut } from './style';
import { Colors } from '../../styles/Global';
import useCookies from '../../hooks/useCookies';
import AuthContext from '../../context/AuthContext';

// Assets
import ConfigIcon from '../../assets/HomeIcons/configIcon.svg';
import ConfigIconWhite from '../../assets/HomeIcons/configIconWhite.svg';

import DashboardIcon from '../../assets/HomeIcons/dashboardIcon.svg';
import DashboardIconWhite from '../../assets/HomeIcons/dashboardIconWhite.svg'

import ReportesIcon from '../../assets/HomeIcons/reportesIcon.svg';
import ReportesIconWhite from '../../assets/HomeIcons/reportesIconWhite.svg'

import UsuariosIconWhite from '../../assets/HomeIcons/usuariosIconWhite.svg'
import UsuariosIcon from '../../assets/HomeIcons/usuariosIcon.svg';


const LeftBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { setToken } = useContext(AuthContext);
    const { deleteCookie } = useCookies();

    const activeSections = (path) => {
        return {
            backgroundColor: location.pathname == path ? Colors.C_2 : Colors.White_2,
            padding: '4px 11px'
        }
    }

    const handleLogout = () => {
        setToken('');
        deleteCookie('userID');
        navigate('/')
    }

    return (
        <NavContainer>
            <div>
                <ul>
                    <Link to='/home/dashboard'>
                        <LinksItems style={activeSections('/home/dashboard')}>
                            <img src={location.pathname == '/home/dashboard' ? DashboardIconWhite : DashboardIcon} alt='Ícono del dashboad' />
                            <LinkText 
                            style={{color: location.pathname == '/home/dashboard' ? Colors.White_2 : Colors.C_2}}>Dashboard</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home/reports'>
                        <LinksItems style={activeSections('/home/reports')} >
                            <img src={location.pathname == '/home/reports' ? ReportesIconWhite : ReportesIcon} alt='Ícono de reportes' />
                            <LinkText 
                            style={{color: location.pathname == '/home/reports' ? Colors.White_2 : Colors.C_2}}>Reportes</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home/users'>
                        <LinksItems style={activeSections('/home/users')}>
                            <img src={location.pathname == '/home/users' ? UsuariosIconWhite :  UsuariosIcon} alt='Ícono de usuarios' />
                            <LinkText 
                            style={{color: location.pathname == '/home/users' ? Colors.White_2 : Colors.C_2}}>Usuarios</LinkText>
                        </LinksItems>
                    </Link>

                    <Link to='/home/configuration'>
                        <LinksItems style={activeSections('/home/configuration')}>
                            <img src={location.pathname == '/home/configuration' ? ConfigIconWhite : ConfigIcon} alt='Ícono de configuración' />
                            <LinkText 
                            style={{color: location.pathname == '/home/configuration' ? Colors.White_2 : Colors.C_2}}>Configuración</LinkText>
                        </LinksItems>
                    </Link>
                </ul>
            </div>
            <div>
                <LogOut onClick={handleLogout}>Cerrar sesión</LogOut>
            </div>
        </NavContainer>
    )
};



export default memo(LeftBar, (prevProps, nextProps) => {
    return prevProps.alt === nextProps.alt;
});