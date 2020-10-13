import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Backdrop from './backdrop.component';

const childContent = 'This is child';
const closeFunction = jest.fn();

const defaultProps = {
    closeFunction,
};

const renderBackdrop = (props = defaultProps, children = childContent) => {
    const utils = render(<Backdrop {...props}>{children}</Backdrop>);

    return { ...utils };
};

describe('Backdrop', () => {
    it('renders without crashing', () => {
        const { unmount } = renderBackdrop();

        unmount();
    });

    it('renders given children element wrapped with backdrop', () => {
        const { getByText } = renderBackdrop();
        const renderedChild = getByText(childContent);

        expect(renderedChild).toBeInTheDocument();
    });

    it('calls received function on element click', () => {
        const { getByText } = renderBackdrop({ closeFunction });
        const backdrop = getByText(childContent);

        fireEvent.click(backdrop);

        expect(closeFunction).toHaveBeenCalledTimes(1);
    });
});
