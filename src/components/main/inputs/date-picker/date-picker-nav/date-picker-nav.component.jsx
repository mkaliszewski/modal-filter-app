import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../shared/icon/icon.component';
import './date-picker-nav.styles.scss';

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
