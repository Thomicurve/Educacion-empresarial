import styled from "styled-components";
import { Colors } from "../../styles/Global";

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    margin-bottom: 25px;
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
    color: ${Colors.C_2};
    font-weight: 400;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
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
    top: 40px;
    background-color: ${Colors.White_1};
`;

export { InputContainer, Label, Input, Icon };