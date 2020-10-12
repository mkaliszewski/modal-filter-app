import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox/checkbox.component';
import TextInput from '../text-input/text-input.component';
import { filterName, EMPLOYEE_PROPTYPES } from '../../helpers';
import './multiselect-dropdown.styles.scss';

const INITIAL_HEIGHT = 80;
const ELEMENT_HEIGHT = 40;
const MAX_EEMENT_NUM = 4;
const OFFSET = 1;
const MAX_LIST_HEIGHT = ELEMENT_HEIGHT * MAX_EEMENT_NUM + OFFSET;

const MultiselectDropdown = ({
    selectOptions,
    filtredRecords,
    selectedOptions,
    setSelectedOptions,
    isEmployeesMultiselect,
    areFiltersEmpty,
}) => {
    const options = isEmployeesMultiselect ? filtredRecords : selectOptions;
    const [searchValue, setSearchValue] = useState('');
    const [filtredOptions, setFiltredOptions] = useState(options);

    const handeSearchChange = ({ target: { value } }) => {
        setSearchValue(value);
    };

    useEffect(() => {
        if (isEmployeesMultiselect && areFiltersEmpty) {
            setFiltredOptions([]);
        } else {
            setFiltredOptions(filterName(searchValue, options));
        }
    }, [searchValue, areFiltersEmpty]);

    const numberOfElements = options.length;
    const listHeight = numberOfElements * ELEMENT_HEIGHT + OFFSET;
    const listFixedHeight =
        listHeight >= MAX_LIST_HEIGHT ? MAX_LIST_HEIGHT : listHeight;
    const dropdownHeight = INITIAL_HEIGHT + listFixedHeight;

    const filtredOptionsLength = filtredOptions.length;

    const areOptionsEqual =
        JSON.stringify(filtredOptions) === JSON.stringify(selectedOptions);

    const handleAllOptionsSelect = () =>
        areOptionsEqual
            ? setSelectedOptions([])
            : setSelectedOptions(filtredOptions);

    const handleSingleOptionSelect = (el) => {
        const index = selectedOptions.indexOf(el);

        if (index > -1) {
            const updatedOptions = [...selectedOptions];
            updatedOptions.splice(index, 1);

            setSelectedOptions(updatedOptions);
        } else {
            const updatedOptions = [...selectedOptions, el];

            setSelectedOptions(updatedOptions);
        }
    };

    return (
        <div
            className="multiselect-dropdown"
            style={{ height: `${dropdownHeight}px` }}
        >
            <div className="multiselect-dropdown__element">
                <TextInput
                    placeholder="Szukaj..."
                    isDropdown
                    handeNameSearchChange={handeSearchChange}
                />
            </div>
            <div
                className="multiselect-dropdown__element"
                onClick={handleAllOptionsSelect}
            >
                <Checkbox
                    element="Wszystkie"
                    isChecked={areOptionsEqual && !!filtredOptionsLength}
                />
            </div>

            <ul
                className={`multiselect-dropdown__list ${
                    !filtredOptionsLength
                        ? 'multiselect-dropdown__list--empty'
                        : undefined
                }`}
                style={{ height: `${listFixedHeight}px` }}
            >
                {filtredOptionsLength
                    ? filtredOptions.map((el) => {
                          const elementName =
                              typeof el === 'string' ? el : el.name;

                          return (
                              <li
                                  key={elementName}
                                  className="multiselect-dropdown__element"
                                  onClick={() => handleSingleOptionSelect(el)}
                                  role="menuitem"
                              >
                                  <Checkbox
                                      element={el}
                                      isChecked={selectedOptions.includes(el)}
                                  />
                              </li>
                          );
                      })
                    : 'Brak elementów'}
            </ul>
        </div>
    );
};

MultiselectDropdown.propTypes = {
    selectOptions: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, EMPLOYEE_PROPTYPES])
    ).isRequired,
    filtredRecords: PropTypes.arrayOf(EMPLOYEE_PROPTYPES).isRequired,
    selectedOptions: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, EMPLOYEE_PROPTYPES])
    ).isRequired,
    setSelectedOptions: PropTypes.func.isRequired,
    isEmployeesMultiselect: PropTypes.bool.isRequired,
    areFiltersEmpty: PropTypes.bool.isRequired,
};

export default MultiselectDropdown;
