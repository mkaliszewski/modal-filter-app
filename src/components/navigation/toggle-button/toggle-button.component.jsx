import React from 'react';
import PropTypes from 'prop-types';
import './toggle-button.styles.scss';

/**
 * Component used to toggle navigation bar
 *
 * @param {function} openNavbar function called on button click used to open navbar
 *
 * @return  {FC} ToggleButton component
 *
 * @component
 * @example
 * const openNavbar = () => {}
 *
 * return (
 *    <ToggleButton openNavbar={openNavbar} />
 * )
 *
 */

const ToggleButton = ({ openNavbar }) => (
    <div
        onClick={openNavbar}
        className="toggle-button"
        type="button"
        role="button"
        tabIndex={0}
    >
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </div>
);

ToggleButton.propTypes = {
    openNavbar: PropTypes.func.isRequired,
};
export default ToggleButton;
