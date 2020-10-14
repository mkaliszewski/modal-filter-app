import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../shared/icon/icon.component';
import './date-picker-nav.styles.scss';

/**
 * Component used to as navigation button for date picker
 *
 * @param {string} iconName icon name used as a button icon presented in button
 * @param {function} onClick function to be called on button click
 *
 * @return  {FC} PickerNavButton component
 *
 * @component
 * @example
 * const iconName = 'next'
 * const onClick = () =>{}
 *
 * return (
 *    <PickerNavButton iconName={iconName} onClick={onClick} />
 * )
 *
 */

const PickerNavButton = ({ iconName, onClick }) => (
    <button className="nav-button" type="button" onClick={onClick}>
        <Icon iconName={iconName} customCSSClass={iconName} />
    </button>
);

PickerNavButton.propTypes = {
    iconName: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

PickerNavButton.defaultProps = {
    onClick: () => {},
};

export default PickerNavButton;
