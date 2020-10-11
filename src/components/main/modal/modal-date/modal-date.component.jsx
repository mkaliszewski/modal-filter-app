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

const ModalDate = ({ setModalRule, isAnyModalOpen, updateFilterValues }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [pickerState, setPickerState] = useState(INITIAL_PICKER_STATE);

    // dropdown handlers
    const openDropdown = () => {
        setIsDropdownOpen(true);
        setModalRule(true);
    };

    const closeDropdown = () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false);
            setModalRule(false);
        }
    };

    // date handlers
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

    const transformDate = (date) => {
        if (date instanceof Date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;

            return `${day}.${month < 10 ? `0${month}` : month}`;
        }
        return '';
    };

    const inputValue = startDate
        ? `${transformDate(startDate)}-${transformDate(endDate)}`
        : 'Wybierz';

    const canDropdownBeClosed =
        (isAnyModalOpen && endDate) ||
        (isAnyModalOpen && !startDate && !endDate);
    return (
        <div className="modal-date">
            <div
                className="modal-date__texts-container"
                onClick={canDropdownBeClosed ? closeDropdown : openDropdown}
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
                    handleDateChange={handleDateChange}
                    pickerState={pickerState}
                    closeDropdown={canDropdownBeClosed ? closeDropdown : null}
                    clearDatePicker={clearDatePicker}
                />
            )}
        </div>
    );
};

ModalDate.propTypes = {
    setModalRule: PropTypes.func,
    isAnyModalOpen: PropTypes.bool,
    updateFilterValues: PropTypes.func.isRequired,
};

ModalDate.defaultProps = {
    setModalRule: () => {},
    isAnyModalOpen: false,
};

export default ModalDate;
