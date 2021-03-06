import React from 'react';
import PropTypes from 'prop-types';
import { useMonth } from '@datepicker-react/hooks';
import { enPlMonths } from '../helpers';
import PickerDay from '../date-picker-day/date-picker-day.component';
import './date-picker-month.styles.scss';

const WEEK_DAYS_LABELS = ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'];

/**
 * Component used to as single month in date picker
 *
 * @param {number} year given year
 * @param {number} month given month
 * @param {number} firstDayOfWeek given first day of the week
 *
 * @return  {FC} PickerMonth component
 *
 * @component
 * @example
 * const year = 2020
 * const month = 6
 * const firstDayOfWeek = 1
 *
 * return (
 *    <PickerMonth year={year} month={month} firstDayOfWeek={firstDayOfWeek} />
 * )
 *
 */

const PickerMonth = ({ year, month, firstDayOfWeek }) => {
    const { days, monthLabel } = useMonth({
        year,
        month,
        firstDayOfWeek,
    });

    const convertMonthLabelToPl = (label = monthLabel) => {
        const splitedDate = label.split(' ');
        const convertedMonth = enPlMonths[splitedDate[0]];

        return `${convertedMonth} ${splitedDate[1]}`;
    };

    return (
        <div className="month">
            <div className="month__month-label">
                <strong>{convertMonthLabelToPl()}</strong>
            </div>
            <div className="month__day-container">
                {WEEK_DAYS_LABELS.map((dayLabel) => (
                    <div className="month__day-label" key={dayLabel}>
                        {dayLabel}
                    </div>
                ))}
            </div>
            <div className="month__day-space">
                {days.map((day, index) =>
                    day ? (
                        <PickerDay
                            date={day.date}
                            key={day.date.toString()}
                            dayLabel={day.dayLabel}
                        />
                    ) : (
                        <div key={index} />
                    )
                )}
            </div>
        </div>
    );
};

PickerMonth.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    firstDayOfWeek: PropTypes.number.isRequired,
};

export default PickerMonth;
