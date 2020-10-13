import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.styles.scss';

const PrimaryButton = ({ text, buttonFunction, customCSSClass }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className={`primary-button ${customCSSClass}`}
        >
            {text}
        </button>
    );
};

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
    customCSSClass: PropTypes.string,
};

PrimaryButton.defaultProps = {
    buttonFunction: () => {},
    customCSSClass: '',
};

export default PrimaryButton;
