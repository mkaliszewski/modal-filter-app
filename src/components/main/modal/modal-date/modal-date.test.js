import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import {
    fireEvent,
    render,
    screen,
    cleanup,
    getByText,
} from '@testing-library/react';
import ModalDate from './modal-date.component';

const handleModalRuleChange = jest.fn();
const isAnyModalOpen = false;
const updateFilterValues = jest.fn();

const defaultProps = {
    handleModalRuleChange,
    isAnyModalOpen,
    updateFilterValues,
};

const renderModalDate = (props = defaultProps) => {
    const utils = render(<ModalDate {...props} />);

    return { ...utils };
};

const renderModalDateAfterDropdownOpen = (props = defaultProps) => {
    render(<ModalDate {...props} />);
    const dropdownTitleElement = screen.getByRole('button');

    fireEvent.click(dropdownTitleElement);
};

describe('ModalDate', () => {
    it('renders without crashing', () => {
        const { unmount } = renderModalDate();

        unmount();
    });

    it('calls handleModalRuleChange recived from props on dropdown title click', () => {
        const { getByRole } = renderModalDate();
        const dropdownTitleElement = getByRole('button');

        fireEvent.click(dropdownTitleElement);

        expect(handleModalRuleChange).toHaveBeenCalledTimes(1);
    });

    it('shows date picker after click on dropdown title', () => {
        const { getByRole, queryByText } = renderModalDate();
        const dropdownTitleElement = getByRole('button');
        const dayLabel = 'Pon';
        let dayElement = queryByText(dayLabel);

        expect(dayElement).not.toBeInTheDocument();

        fireEvent.click(dropdownTitleElement);

        dayElement = queryByText(dayLabel);
        expect(dayElement).toBeInTheDocument();
    });

    describe('after dropdown opens', () => {
        beforeEach(() => {
            renderModalDateAfterDropdownOpen();
        });

        afterEach(() => {
            cleanup();
        });

        it('calls updateFilterValues after click on date picker day', () => {
            const dayLabel = '01';
            const pickerDay = screen.getByText(dayLabel);

            fireEvent.click(pickerDay);

            expect(updateFilterValues).toHaveBeenCalled();
        });

        it('displays selected dates after clicking on dates range', () => {
            const dayLabelOne = '01';
            const dayLabelTwo = '02';
            const pickerDayOne = screen.getByText(dayLabelOne);
            const pickerDayTwo = screen.getByText(dayLabelTwo);
            const month = new Date().getMonth() + 1;

            const expectedDate = `1.${month < 10 ? `0${month}` : month} - 2.${
                month < 10 ? `0${month}` : month
            }`;

            fireEvent.click(pickerDayOne);
            fireEvent.click(pickerDayTwo);

            const dateElement = screen.getByText(expectedDate);

            expect(dateElement).toBeInTheDocument();
        });

        it('closes date picker after click on close element in date picker', () => {
            const clearText = 'Zamknij';
            const closeElement = screen.getByText(clearText);

            fireEvent.click(closeElement);

            expect(handleModalRuleChange).toHaveBeenCalled();
        });
    });
});
