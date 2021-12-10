import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Global';

const Button = styled.input`
        opacity: ${props => !props.active ? 0.5 : 1};
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

const Buttons = ({ buttonText, active }) => {

    return (
        <Button active={active} type="submit" value={buttonText}/>
    )
};

export default Buttons;