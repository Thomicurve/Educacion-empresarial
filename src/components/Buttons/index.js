import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Global';

const Buttons = ({ buttonText, active }) => {

    const Button = styled.button`
        opacity: ${!active ? 0.7 : 1};
        width: 100%;
        text-align: center;
        background-color: ${Colors.C_2};
        outline: none;
        border: none;
        border-radius: 6px;
        color: ${Colors.White_1};
        font-size: 16px;
        font-weight: 500;
        line-height: 21.78px;
        padding: 8px 0px;
        cursor: pointer;
        margin-top: 30px;
    `;

    return (
        <Button>{buttonText}</Button>
    )
};

export default Buttons;