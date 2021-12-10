import styled from "styled-components";
import { Colors } from "../../styles/Global";

const FormContainer = styled.form`
    margin-top: 53px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const AdminLoginContainer = styled.div`
    width: 490px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 550px) {
        width: 90%;
    }
`;

const ForgotPassword = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-decoration-line: underline;
    text-align: right;
    color: ${Colors.Gray_2};
`;

export { FormContainer, ForgotPassword, AdminLoginContainer };