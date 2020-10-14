import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TableRowHead from './table-row-head.component';

const data = ['headingOne', 'headingTwo', 'headingThree'];

const defaultProps = {
    data,
};

const renderTableRowHead = (props = defaultProps) => {
    const utils = render(
        <table>
            <thead>
                <TableRowHead {...props} />
            </thead>
        </table>
    );

    return { ...utils };
};

describe('TableRowHead', () => {
    it('renders without crashing', () => {
        const { unmount } = renderTableRowHead();

        unmount();
    });

    describe('displays received table rows with headings: ', () => {
        data.forEach((heading) => {
            it(heading, () => {
                const { getByText } = renderTableRowHead();
                const rowHead = getByText(heading);

                expect(rowHead).toBeInTheDocument();
            });
        });
    });
});
