import styled from "styled-components";
import { Colors } from "../../styles/Global";

const NavContainer = styled.nav`
    background-color: ${Colors.White_2};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 37px;
    padding-right: 60px;
`;

// Logo article

const LogoContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoTitle = styled.h1`
    font-weight: 600;
    color: ${Colors.C_2};
    line-height: 16px;
    font-size: 16px;
    margin-left: 10px;
`;

// User Article

const UserContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NotificationsContainer = styled.div`
    cursor: pointer;
    width: 35.06px;
    height: 35.06px;
    padding-top: 5px;
`;

const UserDataContainer = styled.div`
    display: flex;
`;

const UserPhoto = styled.img`
    width: 35.06px;
    height: 35.06px;
    margin-right: 14.04px;
    margin-left: 27.96px;
`;

const UserName = styled.h5`
    color: ${Colors.C_2};
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    font-family: 'Manrope', sans-serif;
`;

const UserRol = styled.h6`
    color: ${Colors.C_3};
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 17px;
    font-weight: normal;
`;


export { UserName, UserPhoto, UserRol, UserDataContainer, UserContainer, LogoTitle, NotificationsContainer, NavContainer, LogoContainer };