import React from 'react';
import PropTypes from 'prop-types';
import { useDatepicker } from '@datepicker-react/hooks';
import PickerMonth from './date-picker-month/date-picker-month.component';
import PickerNavButton from './date-picker-nav/date-picker-nav.component';
import PickerHandler from './date-picker-handler/date-picker-handler.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';
import DatepickerContext from './date-picker.context';
import './date-picker.styles.scss';

const MIN_MONTH = 0;
const MAX_MONTH = 11;

const DatePicker = ({
    pickerState: { startDate, endDate, focusedInput },
    handleDateChange,
    closeDropdown,
    clearDatePicker,
}) => {
    const {
        firstDayOfWeek,
        activeMonths,
        isDateSelected,
        isDateHovered,
        isFirstOrLastSelectedDate,
        isDateBlocked,
        isDateFocused,
        focusedDate,
        onDateHover,
        onDateSelect,
        onDateFocus,
        goToPreviousMonthsByOneMonth,
        goToNextMonthsByOneMonth,
    } = useDatepicker({
        startDate,
        endDate,
        focusedInput,
        onDatesChange: handleDateChange,
    });

    const currentMonth = activeMonths[0].month;
    const currentYear = activeMonths[0].year;

    const validateNavigation = (month, fnc) =>
        currentMonth === month ? null : fnc;

    return (
        <DatepickerContext.Provider
            value={{
                focusedDate,
                isDateFocused,
                isDateSelected,
                isDateHovered,
                isDateBlocked,
                isFirstOrLastSelectedDate,
                onDateSelect,
                onDateFocus,
                onDateHover,
            }}
        >
            <div className="date-picker">
                <div className="date-picker__controls-container">
                    <PickerHandler
                        text="Wyczyść"
                        clickFunction={clearDatePicker}
                    />
                    <PickerHandler
                        text="Zamknij"
                        clickFunction={closeDropdown}
                    />
                </div>

                <PickerMonth
                    year={currentYear}
                    month={currentMonth}
                    firstDayOfWeek={firstDayOfWeek}
                />
                <div className="date-picker__butons-container">
                    <PickerNavButton
                        iconName={ICONS_NAMES.PREVIOUS}
                        onClick={validateNavigation(
                            MIN_MONTH,
                            goToPreviousMonthsByOneMonth
                        )}
                    />
                    <PickerNavButton
                        iconName={ICONS_NAMES.NEXT}
                        onClick={validateNavigation(
                            MAX_MONTH,
                            goToNextMonthsByOneMonth
                        )}
                    />
                </div>
            </div>
        </DatepickerContext.Provider>
    );
};

DatePicker.propTypes = {
    pickerState: PropTypes.shape({
        startDate: PropTypes.instanceOf(Date),
        endDate: PropTypes.instanceOf(Date),
        focusedInput: PropTypes.string,
    }).isRequired,
    handleDateChange: PropTypes.func.isRequired,
    closeDropdown: PropTypes.func,
    clearDatePicker: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
    closeDropdown: () => {},
};

export default DatePicker;
