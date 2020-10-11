import React from 'react';
import PropTypes from 'prop-types';
import { useMonth } from '@datepicker-react/hooks';
import { enPlMonths } from '../helpers';
import Day from '../date-picker-day/date-picker-day.component';
import './date-picker-month.styles.scss';

const Month = ({ year, month, firstDayOfWeek }) => {
    const { days, monthLabel } = useMonth({
        year,
        month,
        firstDayOfWeek,
    });

    const weekdayLabels = ['Pon', 'Wto', 'Śro', 'Czw', 'Pią', 'Sob', 'Nie'];

    const convertMonthLabelToPl = (label = monthLabel) => {
        const splitedDate = label.split(' ');
        const convertedMonth = enPlMonths[splitedDate[0]];
        const endDate = `${convertedMonth} ${splitedDate[1]}`;

        return endDate;
    };

    return (
        <div className="month">
            <div className="month__month-label">
                <strong>{convertMonthLabelToPl()}</strong>
            </div>
            <div className="month__day-container">
                {weekdayLabels.map((dayLabel) => (
                    <div className="month__day-label" key={dayLabel}>
                        {dayLabel}
                    </div>
                ))}
            </div>
            <div className="month__day-space">
                {days.map((day, index) =>
                    day ? (
                        <Day
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

Month.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    firstDayOfWeek: PropTypes.number.isRequired,
};
export default Month;
