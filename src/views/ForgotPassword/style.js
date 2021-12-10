import styled from "styled-components";
import { Colors } from "../../styles/Global";

const ForgotContainer = styled.div`
    width: 490px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 550px) {
        width: 90%;
    }
`;

const Description = styled.p`
    font-weight: normal;
    font-size: 21px;
    line-height: 32px;
    color: ${Colors.Gray_3};
    margin-top: 50px;
    @media screen and (max-width: 550px) {
        font-size: 16px;
    }

`;

const GoBackButtonContainer = styled.div`
    position: relative;
    left: -35.77%;
    top: 30px;
    @media screen and (max-width: 880px) {
        left: -5%;
    }

    @media screen and (max-width: 580px) {
        left: 5%;
    }
`

const GoBackButtonText = styled.p`
    color: ${Colors.C_2};
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const GoBackIcon = styled.img`
    margin-right: 20px;
    width: 8px;
`;


export { ForgotContainer, Description, GoBackButtonContainer, GoBackButtonText, GoBackIcon };