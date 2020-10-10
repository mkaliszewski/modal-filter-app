import React, { useState } from 'react';
import MultiselectDropdown from '../../inputs/multiselect-dropdown/multiselect-dropdown.component';
import Icon from '../../../shared/icon/icon.component';
import { ICONS_NAMES } from '../../../../mock-data/mock.data';
import './modal-date.styles.scss';

const ModalDate = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="modal-date">
            <div
                className="modal-date__texts-container"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <Icon
                    iconName={ICONS_NAMES.CALENDAR}
                    customCSSClass={ICONS_NAMES.CALENDAR}
                />

                <div className="modal-date__value-container">
                    <span className="modal-date__description">Okres</span>
                    <div className="modal-date__value">Wybierz</div>
                </div>
            </div>

            {isDropdownOpen && <MultiselectDropdown />}
        </div>
    );
};

export default ModalDate;
