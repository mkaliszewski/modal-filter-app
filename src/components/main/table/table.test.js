import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Table from './table.component';
import { EMPLOYEES_HEADERS } from '../../../mock-data/mock.data';
import { formatDateToString, formatStringsFromArr } from '../helpers';

const data = [
    {
        id: 1,
        name: 'John Smith',
        date: new Date(2020, 0, 1),
        job: 'cook',
        agreement: 'pernament',
        locations: ['loc1', 'loc2'],
    },
    {
        id: 2,
        name: 'Tom Smith',
        date: new Date(2020, 1, 1),
        job: 'cleaner',
        agreement: 'temporary',
        locations: ['loc3', 'loc4'],
    },
];

const defaultProps = {
    data,
};

const renderTable = (props = defaultProps) => {
    const utils = render(<Table {...props} />);

    return { ...utils };
};

describe('Table', () => {
    const dataLength = data.length;

    it('renders without crashing', () => {
        const { unmount } = renderTable();

        unmount();
    });

    it('displays all given table headings', () => {
        const { getByText } = renderTable();

        EMPLOYEES_HEADERS.forEach((heading) => {
            const tableHeading = getByText(heading);

            expect(tableHeading).toBeInTheDocument();
        });
    });

    it('displays information with records number', () => {
        const { getByText } = renderTable();
        const sumText = `Suma rekordów wynosi: ${dataLength}`;
        const summary = getByText(sumText);

        expect(summary).toBeInTheDocument();
    });

    it('displays special message when no record in data array is given', () => {
        const customProps = { data: [] };
        const { getByText } = renderTable(customProps);
        const message = 'Brak wyników spełniających wymagania';
        const specialMessage = getByText(message);

        expect(specialMessage).toBeInTheDocument();
    });

    describe('displays all data of record with id: ', () => {
        const iconRole = 'presentation';
        data.forEach(({ id, name, date, job, agreement, locations }) => {
            it(`${id}`, () => {
                const { getByText, getAllByRole } = renderTable();
                const recordName = getByText(name);
                const recordDate = getByText(formatDateToString(date));
                const recordJob = getByText(job);
                const recordAgreement = getByText(agreement);
                const recordLocations = getByText(
                    formatStringsFromArr(locations).join('')
                );
                const icons = getAllByRole(iconRole, { hidden: true });

                expect(recordName).toBeInTheDocument();
                expect(recordDate).toBeInTheDocument();
                expect(recordJob).toBeInTheDocument();
                expect(recordAgreement).toBeInTheDocument();
                expect(recordLocations).toBeInTheDocument();
                expect(icons).toHaveLength(dataLength);
            });
        });
    });
});
