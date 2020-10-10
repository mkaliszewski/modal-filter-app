import React from 'react';
import './navbar.styles.scss';
import PropTypes from 'prop-types';
import Icon from '../../shared/icon/icon.component';
import { NAVIGATION_ICONS } from '../navigation-icons.data';

const Navbar = ({ isNavbarOpen }) => (
    <nav className={`navbar ${isNavbarOpen && 'navbar--open'}`}>
        <ul className="navbar__list">
            {NAVIGATION_ICONS.map(({ ICON_NAME, TEXT }) => (
                <li className="navbar__item" key={ICON_NAME}>
                    <Icon iconName={ICON_NAME} />
                    <span>{TEXT}</span>
                </li>
            ))}
        </ul>
    </nav>
);

Navbar.propTypes = {
    isNavbarOpen: PropTypes.bool.isRequired,
};
export default Navbar;
