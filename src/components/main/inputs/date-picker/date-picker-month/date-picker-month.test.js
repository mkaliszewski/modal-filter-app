import React from 'react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PickerMonth from './date-picker-month.component';
import DatepickerContext, {
    datepickerContextDefaultValue,
} from '../date-picker.context';

const year = 2020;
const month = 0;
const firstDayOfWeek = 1;

const defaultProps = {
    year,
    month,
    firstDayOfWeek,
};

const renderPickerMonth = (props = defaultProps) => {
    const utils = render(
        <DatepickerContext.Provider value={datepickerContextDefaultValue}>
            <PickerMonth {...props} />
        </DatepickerContext.Provider>
    );

    return { ...utils };
};

describe('PickerMonth', () => {
    it('renders without crashing', () => {
        const { unmount } = renderPickerMonth();

        unmount();
    });

    it('shows inforamtion about current month and year', () => {
        const { getByText } = renderPickerMonth();
        const expectedMonth = 'Styczeń';
        const date = getByText(`${expectedMonth} ${year}`);

        expect(date).toBeInTheDocument();
    });

    describe('has day week label: ', () => {
        const WEEK_DAYS_LABELS = [
            'Pon',
            'Wto',
            'Śro',
            'Czw',
            'Pią',
            'Sob',
            'Nie',
        ];

        WEEK_DAYS_LABELS.forEach((label) => {
            it(label, () => {
                const { getByText } = renderPickerMonth();
                const dayLabel = getByText(label);

                expect(dayLabel).toBeInTheDocument();
            });
        });
    });

    describe('has day button connected with selected month, day: ', () => {
        const DAYS = [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
        ];

        DAYS.forEach((day) => {
            it(day, () => {
                const { getByText } = renderPickerMonth();
                const dayButton = getByText(day);

                expect(dayButton).toBeInTheDocument();
            });
        });
    });
});
