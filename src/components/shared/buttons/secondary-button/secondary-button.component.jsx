import React from 'react';
import PropTypes from 'prop-types';
import './secondary-button.styles.scss';

const SecondaryButton = ({ children, buttonFunction }) => {
    return (
        <button
            onClick={buttonFunction}
            type="button"
            className="secondary-button"
        >
            {children}
        </button>
    );
};

SecondaryButton.propTypes = {
    children: PropTypes.string.isRequired,
    buttonFunction: PropTypes.func,
};

SecondaryButton.defaultProps = {
    buttonFunction: () => {},
};

SecondaryButton.defaultProps = {};

export default SecondaryButton;
