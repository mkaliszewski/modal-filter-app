import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Modal from './modal.component';
import { MULTISELECTABLE_OPTIONS } from '../../../mock-data/mock.data';

const filtredRecords = [
    {
        id: 1,
        name: 'Adam Adamski',
        date: new Date(2020, 0, 1),
        job: 'cook',
        agreement: 'pernament',
        locations: ['loc1'],
    },
    {
        id: 2,
        name: 'Bernadeta Bednarska',
        date: new Date(2020, 1, 2),
        job: 'waiter',
        agreement: 'temporary',
        locations: ['loc2', 'loc3'],
    },
];
const updateFilterValues = jest.fn();
const handleTableDisplay = jest.fn();
const modalCloseFunction = jest.fn();
const isEmployeeSelected = false;
const areFiltersEmpty = false;

const defaultProps = {
    filtredRecords,
    updateFilterValues,
    handleTableDisplay,
    modalCloseFunction,
    isEmployeeSelected,
    areFiltersEmpty,
};

const renderModal = (props = defaultProps) => {
    const utils = render(<Modal {...props} />);

    return { ...utils };
};

describe('Modal', () => {
    it('renders without crashing', () => {
        const { unmount } = renderModal();

        unmount();
    });

    it('calls modalCloseFunction after click on close button', () => {
        const { getByText } = renderModal();
        const closeText = 'x';
        const closeButton = getByText(closeText);

        fireEvent.click(closeButton);

        expect(modalCloseFunction).toHaveBeenCalledTimes(1);
    });

    describe('displays dropdown elements: ', () => {
        it('date', () => {
            const { getByText } = renderModal();
            const dateTitle = 'Okres';
            const dateElement = getByText(dateTitle);

            expect(dateElement).toBeInTheDocument();
        });

        describe('', () => {
            MULTISELECTABLE_OPTIONS.forEach(({ title, filterKey }) => {
                it(filterKey, () => {
                    const { getByText } = renderModal();
                    const element = getByText(title);

                    expect(element).toBeInTheDocument();
                });
            });
        });
    });

    describe('display button', () => {
        const selectedEmployeeProps = {
            ...defaultProps,
            isEmployeeSelected: true,
        };
        const displayButtonText = 'WYŚWIETL';

        it('is disabled when no employee is selected', () => {
            const { getByText } = renderModal();
            const displayButton = getByText(displayButtonText);

            expect(displayButton).toBeDisabled();
        });

        it('is enabled when employee is selected', () => {
            const { getByText } = renderModal(selectedEmployeeProps);
            const displayButton = getByText(displayButtonText);

            expect(displayButton).toBeEnabled();
        });

        it('calls handleTableDisplay after click on it', () => {
            const { getByText } = renderModal(selectedEmployeeProps);
            const displayButton = getByText(displayButtonText);

            fireEvent.click(displayButton);

            expect(handleTableDisplay).toHaveBeenCalledTimes(1);
        });
    });
});
