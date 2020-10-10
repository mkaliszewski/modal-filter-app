import React, { useState } from 'react';
import MultiselectDropdown from '../../inputs/multiselect-dropdown/multiselect-dropdown.component';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';
import './modal-multiselect.styles.scss';

const ModalMultiselect = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="modal-multiselect">
            <div
                className="modal-multiselect__texts-container"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <span className="modal-multiselect__description">
                    Stanowiska
                </span>
                <div className="modal-multiselect__value-container">
                    <div className="modal-multiselect__value">Wybierz</div>
                    <Icon
                        iconName={ICONS_NAMES.SORT}
                        customCSSClass={ICONS_NAMES.SORT}
                    />
                </div>
            </div>

            {isDropdownOpen && <MultiselectDropdown />}
        </div>
    );
};

export default ModalMultiselect;
