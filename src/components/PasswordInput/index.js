import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, Label, Icon } from '../../styles/InputsStyle';

// Assets
import EyeIcon from '../../assets/EyeIcon.svg';

const PasswordInput = ({ inputTitle, inputPlaceHolder, handleChange, inputID, InputValues, hasEye }) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(null);

    return (
        <InputContainer>
            <Label htmlFor={inputID}>{inputTitle}</Label>
            <Input
                type={!showPassword ? 'password' : 'text'}
                id={inputID}
                placeholder={inputPlaceHolder}
                ref={inputRef}
                onChange={handleChange}
                maxLength={30}
                value={InputValues}
                name={inputID}
            />
            {hasEye &&
                <Icon onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)}>
                    <img src={EyeIcon} alt='Ícono de ojo' />
                </Icon>
            }

        </InputContainer>
    )
};

PasswordInput.propTypes = {
    inputTitle: PropTypes.string.isRequired,
    inputPlaceHolder: PropTypes.string.isRequired
}

export default PasswordInput;