import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import PickerNavButton from './date-picker-nav.component';

const iconName = 'next';
const onClick = jest.fn();

const defaultProps = {
    iconName,
    onClick,
};

const renderPickerNavButton = (props = defaultProps) => {
    const utils = render(<PickerNavButton {...props} />);

    return { ...utils };
};

describe('PickerNavButton', () => {
    const iconRole = 'presentation';
    it('renders without crashing', () => {
        const { unmount } = renderPickerNavButton();

        unmount();
    });

    it('renders button with icon', () => {
        const { getByRole } = renderPickerNavButton();
        const navButton = getByRole(iconRole, { hidden: true });

        expect(navButton).toBeInTheDocument();
    });

    it('call received function on element click', () => {
        const { getByRole } = renderPickerNavButton();
        const navButton = getByRole(iconRole, { hidden: true });

        fireEvent.click(navButton);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
