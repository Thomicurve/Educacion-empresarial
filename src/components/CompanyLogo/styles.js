import styled from "styled-components";
import { Colors } from '../../styles/Global';

const LogoContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 10px;
`;

const Title = styled.h1`
    font-weight: 600;
    color: ${Colors.C_2};
    line-height: 16px;
    font-size: 16px;
`;


export { LogoContainer, Title };