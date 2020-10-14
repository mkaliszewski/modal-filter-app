import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './text-input.component';

const placeholder = 'Please type something...';
const isDropdown = false;
const handeNameSearchChange = jest.fn();
const handleKeyPress = jest.fn();

const defaultProps = {
    placeholder,
    isDropdown,
    handeNameSearchChange,
    handleKeyPress,
};

const renderTextInput = (props = defaultProps) => {
    const utils = render(<TextInput {...props} />);

    return { ...utils };
};

describe('TextInput', () => {
    const iconRole = 'presentation';

    it('renders without crashing', () => {
        const { unmount } = renderTextInput();

        unmount();
    });

    it('renders text input with received placeholder', () => {
        const { getByPlaceholderText } = renderTextInput();
        const inputPlaceholder = getByPlaceholderText(placeholder);

        expect(inputPlaceholder).toBeInTheDocument();
    });

    it(`doesn't render icon when isDropdown prop set to false`, () => {
        const { queryByRole } = renderTextInput();
        const icon = queryByRole(iconRole, { hidden: true });

        expect(icon).not.toBeInTheDocument();
    });

    it('renders icon when isDropdown prop set to true', () => {
        const customProps = { ...defaultProps, isDropdown: true };
        const { getByRole } = renderTextInput(customProps);
        const icon = getByRole(iconRole, { hidden: true });

        expect(icon).toBeInTheDocument();
    });

    it('fires functions received in props on change', () => {
        const { getByPlaceholderText } = renderTextInput();
        const input = getByPlaceholderText(placeholder);

        fireEvent.change(input, { target: { value: 'TEST' } });

        expect(handeNameSearchChange).toHaveBeenCalledTimes(1);
    });

    it('fires functions received in props on change', () => {
        const { getByPlaceholderText } = renderTextInput();
        const input = getByPlaceholderText(placeholder);

        fireEvent.keyPress(input, { keyCode: 13 });

        expect(handleKeyPress).toHaveBeenCalledTimes(1);
    });
});
