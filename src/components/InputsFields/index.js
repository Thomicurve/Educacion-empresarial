import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, Label, Icon } from './styles';

// Assets
import EyeIcon from '../../assets/EyeIcon.svg';

const InputFields = ({inputType, inputTitle, inputPlaceHolder}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return(
        <InputContainer>
            <Label htmlFor={inputTitle}>{inputTitle}</Label>
            <Input 
            type={inputType == 'password' && !showPassword ? 'password' : 'text'} 
            id={inputTitle} 
            placeholder={inputPlaceHolder}
            required />
            { inputType == 'password' && <Icon onClick={handleShowPassword}><img src={EyeIcon} alt='Ícono de ojo' /></Icon> }
        </InputContainer>
    )
};

InputFields.propTypes = {
    inputTitle: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceHolder: PropTypes.string.isRequired
}

export default InputFields;