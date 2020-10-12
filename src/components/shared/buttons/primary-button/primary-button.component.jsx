import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.styles.scss';

const PrimaryButton = ({ text, buttonFunction }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className="primary-button"
        >
            {text}
        </button>
    );
};

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
};

PrimaryButton.defaultProps = {
    buttonFunction: () => {},
};

export default PrimaryButton;
