import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Input, InputContainer, Label } from '../../styles/InputsStyle';


const EmailInput = ({inputTitle, inputPlaceHolder, handleChange, inputID, InputValues}) => {
    const inputRef = useRef(null);

    return(
        <InputContainer>
            <Label htmlFor={inputID}>{inputTitle}</Label>
            <Input 
            type='email'
            maxLength={100}
            id={inputID} 
            placeholder={inputPlaceHolder}
            ref={inputRef}
            onChange={handleChange}
            value={InputValues}
            />
        </InputContainer>
    )
};

EmailInput.propTypes = {
    inputTitle: PropTypes.string.isRequired,
    inputPlaceHolder: PropTypes.string.isRequired
}

export default EmailInput;