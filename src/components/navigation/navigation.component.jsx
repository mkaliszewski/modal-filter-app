import React, { useState } from 'react';
import './navigation.styles.scss';
import ToggleButton from './toggle-button/toggle-button.component';
import Backdrop from '../shared/backdrop/backdrop.component';
import Navbar from './navbar/navbar.component';

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
