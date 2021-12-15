import React from 'react';
import searchIcon from '../../assets/HomeIcons/searchIcon.svg';
import styled from 'styled-components';
import { HeaderText, UsersAmount } from './style';

const TableHeader = ({ amount, headerText, inputText, buttonText }) => {

    // Styles
    const Header = styled.header`
        display: flex;
        align-items: center;
        justify-content: flex-start;
    `;

    const Container = styled.section`
        margin-top: 25px ;
        margin-left: 62px;
        margin-right: 63px;
        background-color: #fff;
        padding: 16px;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
        border-radius: 20px;
    `

    return (
        <Container>
            <Header>
                <HeaderText>{headerText} <UsersAmount>{amount}</UsersAmount></HeaderText>
                <div>
                    <img src={searchIcon} alt='Ícono de busqueda' />
                    <input type="text" placeholder={inputText} />
                </div>
                <div>
                    <p>{buttonText}</p>
                </div>
            </Header>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Fecha de creación</th>
                        <th>Última modificación</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </Container>
    )
};

export default TableHeader;