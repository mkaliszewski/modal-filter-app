import React from 'react';
import PropTypes from 'prop-types';
import './toggle-button.styles.scss';

const ToggleButton = ({ openNavbar }) => {
    return (
        <button onClick={openNavbar} className="togglebutton" type="button">
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </button>
    );
};

ToggleButton.propTypes = {
    openNavbar: PropTypes.func.isRequired,
};
export default ToggleButton;
