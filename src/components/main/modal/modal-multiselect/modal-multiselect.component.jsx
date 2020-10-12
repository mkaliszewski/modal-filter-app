import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MultiselectDropdown from '../../inputs/multiselect-dropdown/multiselect-dropdown.component';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES, JOB_FILTERS } from '../../../../mock-data/mock.data';
import './modal-multiselect.styles.scss';
import Checkbox from '../../inputs/checkbox/checkbox.component';

const ModalMultiselect = ({
    title,
    options,
    setModalRule,
    isAnyModalOpen,
    filterKey,
    updateFilterValues,
    searchFilters,
    filtredRecords,
    filtredEmployees,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

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

    useEffect(() => {
        updateFilterValues(filterKey, selectedOptions);
    }, [selectedOptions]);

    const getInputValue = () => {
        const selectedOptionsLength = selectedOptions.length;

        if (selectedOptionsLength) {
            if (
                filterKey === 'employees' &&
                JSON.stringify(searchFilters) === JSON.stringify(JOB_FILTERS)
            ) {
                setSelectedOptions([]);
                return 'Wybierz';
            }

            if (
                filterKey === 'employees' &&
                !selectedOptions.every((val) => filtredRecords.includes(val))
            ) {
                setSelectedOptions([]);
            }

            const fixOptions = (option) =>
                typeof option === 'object' ? option.name : option;

            const firstOption = fixOptions(selectedOptions[0]);
            switch (selectedOptionsLength) {
                case 1:
                    return `${firstOption}`;
                case 2:
                    return `${firstOption}, ${fixOptions(selectedOptions[1])}`;
                default:
                    return `${firstOption}, ${fixOptions(
                        selectedOptions[1]
                    )} +${selectedOptionsLength - 2}`;
            }
        } else {
            return 'Wybierz';
        }
    };

    return (
        <div className="modal-multiselect">
            <div
                className="modal-multiselect__texts-container"
                onClick={isAnyModalOpen ? closeDropdown : openDropdown}
            >
                <span className="modal-multiselect__description">{title}</span>
                <div className="modal-multiselect__value-container">
                    <div className="modal-multiselect__value">
                        {getInputValue()}
                    </div>
                    <Icon
                        iconName={ICONS_NAMES.SORT}
                        customCSSClass={ICONS_NAMES.SORT}
                    />
                </div>
            </div>

            {isDropdownOpen && (
                <MultiselectDropdown
                    selectOptions={options}
                    employees={filtredRecords}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                    searchFilters={searchFilters}
                    filterKey={filterKey}
                />
            )}
        </div>
    );
};
ModalMultiselect.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType(
            PropTypes.string,
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                date: PropTypes.instanceOf(Date).isRequired,
                job: PropTypes.string.isRequired,
                agreement: PropTypes.string.isRequired,
                locations: PropTypes.arrayOf(PropTypes.string).isRequired,
            })
        )
    ).isRequired,
    setModalRule: PropTypes.func,
    isAnyModalOpen: PropTypes.bool,
    updateFilterValues: PropTypes.func.isRequired,
    filterKey: PropTypes.string.isRequired,
};

ModalMultiselect.defaultProps = {
    setModalRule: () => {},
    isAnyModalOpen: false,
    filtredEmployees: [],
    filtredRecords: [],
};

export default ModalMultiselect;
