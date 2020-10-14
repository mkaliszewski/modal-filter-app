import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import PickerHandler from './date-picker-handler.component';

const text = 'clear';
const clickFunction = jest.fn();

const defaultProps = {
    text,
    clickFunction,
};

const renderPickerHandler = (props = defaultProps) => {
    const utils = render(<PickerHandler {...props} />);

    return { ...utils };
};

describe('PickerHandler', () => {
    it('renders without crashing', () => {
        const { unmount } = renderPickerHandler();

        unmount();
    });

    it('renders element with received text', () => {
        const { getByText } = renderPickerHandler();
        const handler = getByText(text);

        expect(handler).toBeInTheDocument();
    });

    it('call received function on element click', () => {
        const { getByText } = renderPickerHandler();
        const handler = getByText(text);

        fireEvent.click(handler);

        expect(clickFunction).toHaveBeenCalledTimes(1);
    });
});
