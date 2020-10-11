import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../shared/icon/icon.component';
import './date-picker-nav.styles.scss';

const NavButton = ({ iconName, onClick }) => (
    <button className="nav-button" type="button" onClick={onClick}>
        <Icon iconName={iconName} customCSSClass={iconName} />
    </button>
);

NavButton.propTypes = {
    iconName: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

NavButton.defaultProps = {
    onClick: () => {},
};

export default NavButton;
