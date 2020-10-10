import React from 'react';
import PropTypes from 'prop-types';
import './secondary-button.styles.scss';

const SecondaryButton = ({ children }) => {
    return (
        <button type="button" className="secondary-button">
            {children}
        </button>
    );
};

SecondaryButton.propTypes = {
    children: PropTypes.string.isRequired,
};

SecondaryButton.defaultProps = {};

export default SecondaryButton;
