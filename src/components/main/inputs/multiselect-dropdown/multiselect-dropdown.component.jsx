import React, { useState, useEffect } from 'react';
import PropTypes, { element } from 'prop-types';
import Checkbox from '../checkbox/checkbox.component';
import TextInput from '../text-input/text-input.component';
import { filterName } from '../../helpers';
import './multiselect-dropdown.styles.scss';

const MultiselectDropdown = ({
    options,
    selectedOptions,
    setSelectedOptions,
}) => {
    const [searchValue, setSearchValue] = useState('');
    const [filtredOptions, setFiltredOptions] = useState(options);

    const handeSearchChange = ({ target: { value } }) => {
        setSearchValue(value);
    };

    useEffect(() => {
        setFiltredOptions(filterName(searchValue, options));
    }, [searchValue]);

    const INITIAL_HEIGHT = 80;
    const ELEMENT_HEIGHT = 40;
    const MAX_EEMENT_NUM = 4;
    const OFFSET = 1;
    const MAX_LIST_HEIGHT = ELEMENT_HEIGHT * MAX_EEMENT_NUM + OFFSET;
    const numberOfElements = options.length;
    const listHeight = numberOfElements * ELEMENT_HEIGHT + OFFSET;
    const listFixedHeight =
        listHeight >= MAX_LIST_HEIGHT ? MAX_LIST_HEIGHT : listHeight;
    const dropdownHeight = INITIAL_HEIGHT + listFixedHeight;

    const filtredOptionsLength = filtredOptions.length;
    const selectedOptionsLength = selectedOptions.length;
    const areOptionsEqual = filtredOptionsLength === selectedOptionsLength;

    const handleAllOptionsSelect = () => {
        if (!areOptionsEqual) {
            setSelectedOptions(filtredOptions);
        } else {
            setSelectedOptions([]);
        }
    };

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
                    isChecked={areOptionsEqual && filtredOptionsLength}
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
                          const elementName = el?.name ? el.name : el;
                          return (
                              <li
                                  key={elementName}
                                  className="multiselect-dropdown__element"
                                  onClick={() => handleSingleOptionSelect(el)}
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

export default MultiselectDropdown;
