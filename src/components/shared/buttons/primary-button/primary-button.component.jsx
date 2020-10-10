import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.styles.scss';

const PrimaryButton = ({ children, buttonFunction, isHighResolution }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className={`primary-button ${
                isHighResolution
                    ? 'primary-button--high'
                    : 'primary-button--low'
            }`}
        >
            {children}
        </button>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
    isHighResolution: PropTypes.bool,
};

PrimaryButton.defaultProps = {
    isHighResolution: false,
    buttonFunction: () => {},
};

export default PrimaryButton;
