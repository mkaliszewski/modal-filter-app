import React, { useState, useEffect } from 'react';
import { START_DATE } from '@datepicker-react/hooks';
import PropTypes from 'prop-types';
import DatePicker from '../../inputs/date-picker/date-picker.component';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';
import './modal-date.styles.scss';

const INITIAL_PICKER_STATE = {
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
};

const ModalDate = ({
    handleModalRuleChange,
    isAnyModalOpen,
    updateFilterValues,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [pickerState, setPickerState] = useState(INITIAL_PICKER_STATE);

    // dropdown handlers

    const handleDropdownOpen = () => {
        setIsDropdownOpen(true);
        handleModalRuleChange(true);
    };

    const handleDropdownClose = () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
            handleModalRuleChange(false);
        }
    };

    // date picker handlers

    const handleDateChange = (data) => {
        if (!data.focusedInput) {
            setPickerState({ ...data, focusedInput: START_DATE });
        } else {
            setPickerState(data);
        }
    };

    const clearDatePicker = () => {
        setPickerState(INITIAL_PICKER_STATE);
    };

    const { startDate, endDate } = pickerState;

    useEffect(() => {
        updateFilterValues('date', { startDate, endDate });
    }, [pickerState]);

    // display handlers

    const formatDateToDMString = (date) => {
        if (date instanceof Date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;

            return `${day}.${month < 10 ? `0${month}` : month}`;
        }
        return '';
    };

    const inputValue = startDate
        ? `${formatDateToDMString(startDate)} - ${formatDateToDMString(
              endDate
          )}`
        : 'Wybierz';

    const canDropdownBeClosed =
        (isAnyModalOpen && endDate) ||
        (isAnyModalOpen && !startDate && !endDate);

    return (
        <div className="modal-date">
            <div
                className="modal-date__texts-container"
                onClick={
                    canDropdownBeClosed
                        ? handleDropdownClose
                        : handleDropdownOpen
                }
            >
                <Icon
                    iconName={ICONS_NAMES.CALENDAR}
                    customCSSClass={ICONS_NAMES.CALENDAR}
                />

                <div className="modal-date__value-container">
                    <span className="modal-date__description">Okres</span>
                    <div className="modal-date__value">{inputValue}</div>
                </div>
            </div>

            {isDropdownOpen && (
                <DatePicker
                    pickerState={pickerState}
                    handleDateChange={handleDateChange}
                    clearDatePicker={clearDatePicker}
                    closeDropdown={
                        canDropdownBeClosed ? handleDropdownClose : null
                    }
                />
            )}
        </div>
    );
};

ModalDate.propTypes = {
    handleModalRuleChange: PropTypes.func.isRequired,
    isAnyModalOpen: PropTypes.bool.isRequired,
    updateFilterValues: PropTypes.func.isRequired,
};

export default ModalDate;
