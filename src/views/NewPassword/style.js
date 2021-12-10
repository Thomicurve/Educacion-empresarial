import styled from "styled-components";
import { Colors } from "../../styles/Global";

const NewPassContainer = styled.div`
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

export { Description, NewPassContainer };