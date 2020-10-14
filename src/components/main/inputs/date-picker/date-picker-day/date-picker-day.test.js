import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PickerDay from './date-picker-day.component';
import DatepickerContext, {
    datepickerContextDefaultValue,
} from '../date-picker.context';

const dayLabel = '5';
const date = new Date();

const defaultProps = {
    dayLabel,
    date,
};

const renderPickerDay = (props = defaultProps) => {
    const utils = render(
        <DatepickerContext.Provider value={datepickerContextDefaultValue}>
            <PickerDay {...props} />
        </DatepickerContext.Provider>
    );

    return { ...utils };
};

describe('PickerDay', () => {
    const emptyElementRole = 'presentation';

    it('renders without crashing', () => {
        const { unmount } = renderPickerDay();

        unmount();
    });

    it(`renders button with day label when it's provided without empty field`, () => {
        const { getByText, queryByRole } = renderPickerDay();
        const dayButton = getByText(dayLabel);
        const emptyEl = queryByRole(emptyElementRole);

        expect(dayButton).toBeInTheDocument();
        expect(emptyEl).not.toBeInTheDocument();
    });

    it(`renders only empty field when day label is not provided`, () => {
        const customProps = { ...defaultProps, dayLabel: '' };
        const { queryByText, getByRole } = renderPickerDay(customProps);
        const dayButton = queryByText(dayLabel);
        const emptyEl = getByRole(emptyElementRole);

        expect(dayButton).not.toBeInTheDocument();
        expect(emptyEl).toBeInTheDocument();
    });
});
