import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './navigation.component';

const renderNavigation = () => {
    const utils = render(<Navigation />);

    return { ...utils };
};

describe('Navigation', () => {
    const toggleButtonRole = 'button';

    it('renders without crashing', () => {
        const { unmount } = renderNavigation();

        unmount();
    });

    it('contains toggle button', () => {
        const { getByRole } = renderNavigation();
        const toggleButton = getByRole(toggleButtonRole);

        expect(toggleButton).toBeInTheDocument();
    });

    it('contains navigation bar', () => {
        const navbarRole = 'navigation';
        const { getByRole } = renderNavigation();
        const navbar = getByRole(navbarRole);

        expect(navbar).toBeInTheDocument();
    });

    it(`doesn't display backdrop by default`, () => {
        const backdropTestId = 'backdrop';
        const { queryByTestId } = renderNavigation();
        const backdrop = queryByTestId(backdropTestId);

        expect(backdrop).not.toBeInTheDocument();
    });

    it(`displays backdrop after click on toggle button and hides`, () => {
        const backdropTestId = 'backdrop';
        const { getByTestId, getByRole } = renderNavigation();
        const toggleButton = getByRole(toggleButtonRole);

        fireEvent.click(toggleButton);

        const backdrop = getByTestId(backdropTestId);

        expect(backdrop).toBeInTheDocument();
    });

    it(`hides backdrop after click on it`, () => {
        const backdropTestId = 'backdrop';
        const { getByTestId, queryByTestId, getByRole } = renderNavigation();
        const toggleButton = getByRole(toggleButtonRole);

        fireEvent.click(toggleButton);

        let backdrop = getByTestId(backdropTestId);

        expect(backdrop).toBeInTheDocument();

        fireEvent.click(toggleButton);

        backdrop = queryByTestId(backdropTestId);

        expect(backdrop).toBeInTheDocument();
    });
});
