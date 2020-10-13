import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import PrimaryButton from './primary-button.component';

const text = 'This is button';
const customCSSClass = 'custom-class';
const buttonFunction = jest.fn();

const defaultProps = {
    text,
    customCSSClass,
    buttonFunction,
};

const renderPrimaryButton = (props = defaultProps) => {
    const utils = render(<PrimaryButton {...props} />);

    return { ...utils };
};

describe('PrimaryButton', () => {
    it('renders without crashing', () => {
        const { unmount } = renderPrimaryButton();

        unmount();
    });

    it('renders received text', () => {
        const { getByText } = renderPrimaryButton();
        const buttonText = getByText(text);

        expect(buttonText).toBeInTheDocument();
    });

    it('calls received function on element click', () => {
        const { getByText } = renderPrimaryButton();
        const button = getByText(text);

        fireEvent.click(button);

        expect(buttonFunction).toHaveBeenCalledTimes(1);
    });

    it('has received custom css class', () => {
        const { getByText } = renderPrimaryButton();
        const button = getByText(text);

        expect(button).toHaveClass(customCSSClass);
    });
});
