import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MultiselectDropdown from '../../inputs/multiselect-dropdown/multiselect-dropdown.component';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';
import './modal-multiselect.styles.scss';

const ModalMultiselect = ({
    title,
    options,
    setModalRule,
    isAnyModalOpen,
    filterKey,
    updateFilterValues,
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
        const optionsLength = selectedOptions.length;
        if (optionsLength) {
            const fixOptions = (option) =>
                typeof option === 'object' ? option.name : option;
            // typeof option === 'string' ? option : option.name;
            const firstOption = fixOptions(selectedOptions[0]);
            const secondOption = fixOptions(selectedOptions[1]);

            switch (optionsLength) {
                case 1:
                    return `${firstOption}`;
                case 2:
                    return `${firstOption}, ${secondOption}`;
                default:
                    return `${firstOption}, ${secondOption} +${
                        optionsLength - 2
                    }`;
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
                    options={options}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
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
};

export default ModalMultiselect;
