import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DatePicker from './date-picker.component';
import DatepickerContext, {
    datepickerContextDefaultValue,
} from './date-picker.context';

const pickerState = {
    startDate: null,
    endDate: null,
    focusedInput: 'startDate',
};
const handleDateChange = jest.fn();
const closeDropdown = jest.fn();
const clearDatePicker = jest.fn();

const defaultProps = {
    pickerState,
    handleDateChange,
    closeDropdown,
    clearDatePicker,
};

const renderDatePicker = (props = defaultProps) => {
    const utils = render(
        <DatepickerContext.Provider value={datepickerContextDefaultValue}>
            <DatePicker {...props} />
        </DatepickerContext.Provider>
    );

    return { ...utils };
};

describe('DatePicker', () => {
    const clearHandlerText = 'Wyczyść';
    const closeHandlerText = 'Zamknij';

    it('renders without crashing', () => {
        const { unmount } = renderDatePicker();

        unmount();
    });

    it('renders handler elements', () => {
        const { getByText } = renderDatePicker();
        const clearHandler = getByText(clearHandlerText);
        const closeHandler = getByText(closeHandlerText);

        expect(clearHandler).toBeInTheDocument();
        expect(closeHandler).toBeInTheDocument();
    });

    it('calls passed function on clear handler click', () => {
        const { getByText } = renderDatePicker();
        const clearHandler = getByText(clearHandlerText);

        fireEvent.click(clearHandler);

        expect(clearDatePicker).toBeCalledTimes(1);
    });

    it('calls passed function on close handler click', () => {
        const { getByText } = renderDatePicker();
        const closeHandler = getByText(closeHandlerText);

        fireEvent.click(closeHandler);

        expect(closeDropdown).toBeCalledTimes(1);
    });

    it('renders picker month element', () => {
        const { getByText } = renderDatePicker();
        const dayLabel = 'Pon';
        const monthElment = getByText(dayLabel);

        expect(monthElment).toBeInTheDocument();
    });

    it('renders two navigation buttons', () => {
        const { getAllByRole } = renderDatePicker();
        const iconRole = 'presentation';
        const navButtons = getAllByRole(iconRole, { hidden: true });

        expect(navButtons).toHaveLength(2);
    });
});
