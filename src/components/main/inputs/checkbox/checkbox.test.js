import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Checkbox from './checkbox.component';

const element = 'Option';
const isChecked = false;

const defaultProps = {
    element,
    isChecked,
};

const renderCheckbox = (props = defaultProps) => {
    const utils = render(<Checkbox {...props} />);

    return { ...utils };
};

describe('Checkbox', () => {
    const specialClass = 'checkbox__label--checked';
    const testId = 'checkbox';
    it('renders without crashing', () => {
        const { unmount } = renderCheckbox();

        unmount();
    });

    it('renders text received from props', () => {
        const { getByText } = renderCheckbox();
        const checkboxText = getByText(element);

        expect(checkboxText).toBeInTheDocument();
    });

    it(`label doesn't get special class when received isChecked prop is false`, () => {
        const { getByTestId } = renderCheckbox();
        const checkbox = getByTestId(testId);

        expect(checkbox).not.toHaveClass(specialClass);
    });

    it('label gets special class when received isChecked prop is true', () => {
        const customProps = { ...defaultProps, isChecked: true };
        const { getByTestId } = renderCheckbox(customProps);
        const checkbox = getByTestId(testId);

        expect(checkbox).toHaveClass(specialClass);
    });
});
