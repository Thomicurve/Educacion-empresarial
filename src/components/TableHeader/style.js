import styled from "styled-components";
import { Colors } from '../../styles/Global';

const HeaderText = styled.h5`
    color: ${Colors.C_2};
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
`;

const UsersAmount = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 0px 6px;
    background-color: ${Colors.White_3};
    border-radius: 4px;
    font-weight: normal;
    line-height: 20px;
`;

export {HeaderText, UsersAmount};