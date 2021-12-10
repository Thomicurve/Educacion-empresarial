import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, Label, Icon } from './styles';

// Assets
import EyeIcon from '../../assets/EyeIcon.svg';

const InputFields = ({inputType, inputTitle, inputPlaceHolder}) => {
    return(
        <InputContainer>
            <Label htmlFor={inputTitle}>{inputTitle}</Label>
            <Input type={inputType} id={inputTitle} placeholder={inputPlaceHolder}/>
            { inputType == 'password' && <Icon><img src={EyeIcon} alt='Ícono de ojo' /></Icon> }
        </InputContainer>
    )
};

InputFields.propTypes = {
    inputTitle: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceHolder: PropTypes.string.isRequired
}

export default InputFields;