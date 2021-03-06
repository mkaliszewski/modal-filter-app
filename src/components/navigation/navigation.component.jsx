import React, { useState } from 'react';
import ToggleButton from './toggle-button/toggle-button.component';
import Backdrop from '../shared/backdrop/backdrop.component';
import Navbar from './navbar/navbar.component';
import './navigation.styles.scss';

/**
 * Component used as navigation which contains navigation bar, toggle button and backdrop
 *
 *
 * @return  {FC} Navigation component
 *
 * @component
 * @example
 *
 * return (
 *    <Navigation />
 * )
 *
 */

const Navigation = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const openNavbar = () => {
        setIsNavbarOpen(true);
    };

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    return (
        <>
            <ToggleButton openNavbar={openNavbar} />
            <Navbar isNavbarOpen={isNavbarOpen} />
            {isNavbarOpen && <Backdrop closeFunction={closeNavbar} />}
        </>
    );
};

export default Navigation;
