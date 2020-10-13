import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SecondaryButton from './secondary-button.component';

const text = 'This is button';
const isDisabled = false;
const buttonFunction = jest.fn();

const defaultProps = {
    text,
    isDisabled,
    buttonFunction,
};

const renderSecondaryButton = (props = defaultProps) => {
    const utils = render(<SecondaryButton {...props} />);

    return { ...utils };
};

describe('SecondaryButton', () => {
    it('renders without crashing', () => {
        const { unmount } = renderSecondaryButton();

        unmount();
    });

    it('renders received text', () => {
        const { getByText } = renderSecondaryButton();
        const buttonText = getByText(text);

        expect(buttonText).toBeInTheDocument();
    });

    it('calls received function on element click', () => {
        const { getByText } = renderSecondaryButton();
        const button = getByText(text);

        fireEvent.click(button);

        expect(buttonFunction).toHaveBeenCalledTimes(1);
    });

    it('is enabled while isDisabled prop is false', () => {
        const { getByText } = renderSecondaryButton();
        const button = getByText(text);

        expect(button).toBeEnabled();
    });

    it('is enabled while isDisabled prop is false', () => {
        const updatedProps = { ...defaultProps, isDisabled: true };
        const { getByText } = renderSecondaryButton(updatedProps);
        const button = getByText(text);

        expect(button).toBeDisabled();
    });
});
