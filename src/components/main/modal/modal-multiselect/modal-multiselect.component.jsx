import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MultiselectDropdown from '../../inputs/multiselect-dropdown/multiselect-dropdown.component';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';
import { EMPLOYEE_PROPTYPES, useWindowWidth } from '../../helpers';
import './modal-multiselect.styles.scss';

const MAX_WINDOW_WIDTH = 500;

/**
 * Component used as modal element with dropdown
 *
 * @param {string} title title of label
 * @param {Array} options array of avaliable options
 * @param {function} handleModalRuleChange function to handle modal behavior
 * @param {boolean} isAnyModalOpen informs if any other modal is opened
 * @param {function} updateFilterValues function used to update values of filters
 * @param {string} filterKey key of filter
 * @param {boolean} areFiltersEmpty informs if filters are empty
 * @param {Object[]} filtredRecords array of filtred records
 *
 * @return  {FC} ModalMultiselect component
 *
 * @component
 * @example
 * const title = 'Some title'
 * const options = []
 * const handleModalRuleChange = () => {}
 * const isAnyModalOpen = false
 * const updateFilterValues = () => {}
 * const filterKey = 'jobs'
 * const areFiltersEmpty = false
 * const filtredRecords = []
 *
 * return (
 *    <ModalMultiselect
 *      title={title}
 *      options={options}
 *      handleModalRuleChange={handleModalRuleChange}
 *      isAnyModalOpen={isAnyModalOpen}
 *      updateFilterValues={updateFilterValues}
 *      filterKey={filterKey}
 *      areFiltersEmpty={areFiltersEmpty}
 *      filtredRecords={filtredRecords}
 *    />
 * )
 *
 */

const ModalMultiselect = ({
    title,
    options,
    handleModalRuleChange,
    isAnyModalOpen,
    updateFilterValues,
    filterKey,
    areFiltersEmpty,
    filtredRecords,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const windowWidth = useWindowWidth();
    const isWindowWidthValid = windowWidth <= MAX_WINDOW_WIDTH;

    useEffect(() => {
        updateFilterValues(filterKey, selectedOptions);
    }, [selectedOptions]);

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

    const isEmployeesMultiselect = filterKey === 'employees';

    const isSelectedOptionInFiltredRecords = selectedOptions.every((val) =>
        filtredRecords.includes(val)
    );
    const shouldSelectedOptionsBeCleared =
        isEmployeesMultiselect &&
        (areFiltersEmpty || !isSelectedOptionInFiltredRecords);

    const validateEmployees = () => {
        if (shouldSelectedOptionsBeCleared) {
            setSelectedOptions([]);
            return 'Wybierz';
        }
    };

    const getOptionName = (option) =>
        typeof option === 'object' ? option.name : option;

    const getInputValue = () => {
        const selectedOptionsLength = selectedOptions.length;

        if (selectedOptionsLength) {
            validateEmployees();
            const firstOption = getOptionName(selectedOptions[0]);
            const validWidthMultipleOptions = `${firstOption}  +${
                selectedOptionsLength - 1
            }`;

            switch (selectedOptionsLength) {
                case 1:
                    return `${firstOption}`;
                case 2:
                    return isWindowWidthValid
                        ? validWidthMultipleOptions
                        : `${firstOption}, ${getOptionName(
                              selectedOptions[1]
                          )}`;
                default:
                    return isWindowWidthValid
                        ? validWidthMultipleOptions
                        : `${firstOption}, ${getOptionName(
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
                onClick={
                    isAnyModalOpen ? handleDropdownClose : handleDropdownOpen
                }
            >
                <span className="modal-multiselect__description">{title}</span>
                <div className="modal-multiselect__value-container">
                    <div
                        className="modal-multiselect__value"
                        data-testid="multiselect-value"
                    >
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
                    filtredRecords={filtredRecords}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                    isEmployeesMultiselect={isEmployeesMultiselect}
                    areFiltersEmpty={areFiltersEmpty}
                />
            )}
        </div>
    );
};

ModalMultiselect.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, EMPLOYEE_PROPTYPES])
    ).isRequired,
    handleModalRuleChange: PropTypes.func.isRequired,
    isAnyModalOpen: PropTypes.bool.isRequired,
    updateFilterValues: PropTypes.func.isRequired,
    filterKey: PropTypes.string.isRequired,
    areFiltersEmpty: PropTypes.bool.isRequired,
    filtredRecords: PropTypes.arrayOf(EMPLOYEE_PROPTYPES).isRequired,
};

export default ModalMultiselect;
