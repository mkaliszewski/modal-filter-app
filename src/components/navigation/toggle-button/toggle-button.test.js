import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import ToggleButton from './toggle-button.component';

const openNavbar = jest.fn();

const defaultProps = {
    openNavbar,
};

const renderToggleButton = (props = defaultProps) => {
    const utils = render(<ToggleButton {...props} />);

    return { ...utils };
};

describe('ToggleButton', () => {
    const toggleButtonRole = 'button';

    it('renders without crashing', () => {
        const { unmount } = renderToggleButton();

        unmount();
    });

    it('calls received function on toggle button click', () => {
        const { getByRole } = renderToggleButton();
        const toggleButton = getByRole(toggleButtonRole);

        fireEvent.click(toggleButton);

        expect(openNavbar).toBeCalledTimes(1);
    });

    it('has 3 children which defines toggle button structure', () => {
        const { getByRole } = renderToggleButton();
        const toggleButton = getByRole(toggleButtonRole);
        const toggleButtonChildrenLength = toggleButton.children.length;
        const expectedChildrenNum = 3;

        expect(toggleButtonChildrenLength).toEqual(expectedChildrenNum);
    });
});
