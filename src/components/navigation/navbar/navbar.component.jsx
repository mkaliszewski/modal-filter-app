import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../shared/icon/icon.component';
import { NAVIGATION_ICONS } from '../../../mock-data/mock.data';
import './navbar.styles.scss';

/**
 * Component used as navigation bar
 *
 * @param {boolean} isNavbarOpen decides wheather navbar should get class which allows navbar to be open on mobile devices
 *
 * @return  {FC} Navbar component
 *
 * @component
 * @example
 * const isNavbarOpen = false
 *
 * return (
 *    <Navbar isNavbarOpen={isNavbarOpen} />
 * )
 *
 */

const Navbar = ({ isNavbarOpen }) => (
    <nav
        className={`navbar ${isNavbarOpen ? 'navbar--open' : undefined}`}
        role="navigation"
    >
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
