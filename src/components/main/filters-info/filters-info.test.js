import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { formatDateToString, formatStringsFromArr } from '../helpers';
import FiltersInfo from './filters-info.component';

const searchFilters = {
    date: {
        startDate: new Date(2020, 0, 10),
        endDate: new Date(2020, 9, 10),
    },
    jobs: ['cook', 'waiter'],
    locations: ['loc1', 'loc2'],
    agreements: ['pernament', 'temporary'],
};

const isOpen = false;

const defaultProps = {
    searchFilters,
    isOpen,
};

const renderFiltersInfo = (props = defaultProps) => {
    const utils = render(<FiltersInfo {...props} />);

    return { ...utils };
};

describe('FiltersInfo', () => {
    it('renders without crashing', () => {
        const { unmount } = renderFiltersInfo();

        unmount();
    });

    describe('contains expected informations received from props about: ', () => {
        const {
            date: { startDate, endDate },
            jobs,
            locations,
            agreements,
        } = searchFilters;

        const testData = [
            {
                title: 'start date',
                element: startDate,
            },
            {
                title: 'end date',
                element: endDate,
            },
            {
                title: 'jobs',
                element: jobs,
            },
            {
                title: 'locations',
                element: locations,
            },
            {
                title: 'agreements',
                element: agreements,
            },
        ];

        testData.forEach(({ title, element }) => {
            it(title, () => {
                if (element instanceof Date) {
                    const { getByText } = renderFiltersInfo();
                    const expectedText = getByText(formatDateToString(element));

                    expect(expectedText).toBeInTheDocument();
                } else {
                    const { getByText } = renderFiltersInfo();

                    const expectedText = getByText(
                        formatStringsFromArr(element).join('')
                    );

                    expect(expectedText).toBeInTheDocument();
                }
            });
        });
    });
});
