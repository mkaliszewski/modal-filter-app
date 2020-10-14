import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TableRowBody from './table-row-body.component';
import { formatDateToString, formatStringsFromArr } from '../../../helpers';

const data = {
    id: 1,
    name: 'John Smith',
    date: new Date(),
    job: 'cook',
    agreement: 'pernament',
    locations: ['loc', 'loc2'],
};

const defaultProps = {
    data,
};

const renderTableRowBody = (props = defaultProps) => {
    const utils = render(
        <table>
            <tbody>
                <TableRowBody {...props} />
            </tbody>
        </table>
    );

    return { ...utils };
};

describe('TableRowBody', () => {
    it('renders without crashing', () => {
        const { unmount } = renderTableRowBody();

        unmount();
    });

    it(`displays all record's data with icon`, () => {
        const { getByText, getByRole } = renderTableRowBody();
        const { name, date, job, agreement, locations } = data;
        const iconRole = 'presentation';
        const recordName = getByText(name);
        const recordDate = getByText(formatDateToString(date));
        const recordJob = getByText(job);
        const recordAgreement = getByText(agreement);
        const recordLocations = getByText(
            formatStringsFromArr(locations).join('')
        );
        const icon = getByRole(iconRole, { hidden: true });

        expect(recordName).toBeInTheDocument();
        expect(recordDate).toBeInTheDocument();
        expect(recordJob).toBeInTheDocument();
        expect(recordAgreement).toBeInTheDocument();
        expect(recordLocations).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });
});
