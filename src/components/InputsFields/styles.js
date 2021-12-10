import styled from "styled-components";
import { Colors } from "../../styles/Global";

const InputContainer = styled.div`
    width: 490px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;
`;

const Label = styled.label`
    color: ${Colors.Gray_1};
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
`;

const Input = styled.input`
    background-color: ${Colors.White_1}; 
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 12px;
    padding-right: 40px;
    ::placeholder {
        color: ${Colors.Gray_5};
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
    }
`;

const Icon = styled.i`
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 36px;
    background-color: ${Colors.White_1};
`;

export { InputContainer, Label, Input, Icon };