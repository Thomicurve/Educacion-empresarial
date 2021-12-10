import React from 'react';
import PropTypes from 'prop-types';

import { TitleContainer } from './styles';

const LoginTitles = ({titleText}) => {
    return(
        <TitleContainer>
            <h4>{titleText}</h4>
        </TitleContainer>
    )
}

LoginTitles.propTypes = {
    titleText: PropTypes.string.isRequired
};

export default LoginTitles;