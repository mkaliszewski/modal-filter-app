import React from 'react';
import PropTypes from 'prop-types';
import './secondary-button.styles.scss';

const SecondaryButton = ({ text, buttonFunction, isDisabled }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className="secondary-button"
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};

SecondaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
    isDisabled: PropTypes.bool,
};

SecondaryButton.defaultProps = {
    buttonFunction: () => {},
    isDisabled: false,
};

SecondaryButton.defaultProps = {};

export default SecondaryButton;
