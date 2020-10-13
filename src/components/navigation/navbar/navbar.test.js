import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { NAVIGATION_ICONS } from '../../../mock-data/mock.data';
import Navbar from './navbar.component';

const isNavbarOpen = false;

const defaultProps = {
    isNavbarOpen,
};

const renderNavbar = (props = defaultProps) => {
    const utils = render(<Navbar {...props} />);

    return { ...utils };
};

describe('Navbar', () => {
    const expectedOpenClass = 'navbar--open';
    const navbarRole = 'navigation';

    it('renders without crashing', () => {
        const { unmount } = renderNavbar();

        unmount();
    });

    it(`doesn't have open class when isNavbarOpen is false`, () => {
        const { getByRole } = renderNavbar();
        const navbar = getByRole(navbarRole);

        expect(navbar).not.toHaveClass(expectedOpenClass);
    });

    describe('has icon with navigation element:', () => {
        const testData = NAVIGATION_ICONS.map((item) => item.TEXT);
        const iconRole = 'presentation';

        testData.forEach((navName) => {
            it(navName, () => {
                const { getByText, getAllByRole } = renderNavbar();
                const navbarElement = getByText(navName);
                const icons = getAllByRole(iconRole, { hidden: true });

                expect(navbarElement).toBeInTheDocument();
                expect(icons).toHaveLength(testData.length);
            });
        });
    });
});
