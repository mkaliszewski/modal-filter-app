import React from 'react';
import PropTypes from 'prop-types';
import './toggle-button.styles.scss';

const ToggleButton = ({ openNavbar }) => (
    <button onClick={openNavbar} className="toggle-button" type="button">
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

ToggleButton.propTypes = {
    openNavbar: PropTypes.func.isRequired,
};
export default ToggleButton;
