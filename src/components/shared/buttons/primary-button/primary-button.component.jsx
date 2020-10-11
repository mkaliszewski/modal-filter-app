import React from 'react';
import PropTypes from 'prop-types';
import './primary-button.styles.scss';

const PrimaryButton = ({ children, buttonFunction }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className="primary-button"
        >
            {children}
        </button>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
};

PrimaryButton.defaultProps = {
    buttonFunction: () => {},
};

export default PrimaryButton;
