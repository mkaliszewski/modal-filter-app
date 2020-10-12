import React from 'react';
import PropTypes from 'prop-types';
import './secondary-button.styles.scss';

const SecondaryButton = ({ children, buttonFunction, isDisabled }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className="secondary-button"
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

SecondaryButton.propTypes = {
    children: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
    isDisabled: PropTypes.bool,
};

SecondaryButton.defaultProps = {
    buttonFunction: () => {},
    isDisabled: false,
};

SecondaryButton.defaultProps = {};

export default SecondaryButton;
