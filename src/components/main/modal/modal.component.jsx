import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalMultiselect from './modal-multiselect/modal-multiselect.component';
import ModalDate from './modal-date/modal-date.component';
import SecondaryButton from '../../shared/buttons/secondary-button/secondary-button.component';
import {
    JOB_OPTIONS,
    LOCATIONS_OPTIONS,
    AGREEMENT_OPTIONS,
} from '../../../mock-data/mock.data';
import './modal.styles.scss';

const Modal = ({ filterElements, updateFilterValues, employees }) => {
    const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);
    const setModalRule = (rule) => {
        setIsAnyModalOpen(rule);
    };
    return (
        <div className="modal">
            <h2 className="modal__heading">Wybierz pracowników</h2>

            <div className="modal__select-container">
                <ModalDate
                    setModalRule={setModalRule}
                    isAnyModalOpen={isAnyModalOpen}
                    updateFilterValues={updateFilterValues}
                />
                <ModalMultiselect
                    title="Stanowiska"
                    options={JOB_OPTIONS}
                    setModalRule={setModalRule}
                    isAnyModalOpen={isAnyModalOpen}
                    updateFilterValues={updateFilterValues}
                    filterKey="jobs"
                />
                <ModalMultiselect
                    title="Lokalizacje"
                    options={LOCATIONS_OPTIONS}
                    setModalRule={setModalRule}
                    isAnyModalOpen={isAnyModalOpen}
                    updateFilterValues={updateFilterValues}
                    filterKey="locations"
                />
                <ModalMultiselect
                    title="Pracownicy"
                    options={employees}
                    setModalRule={setModalRule}
                    isAnyModalOpen={isAnyModalOpen}
                    updateFilterValues={updateFilterValues}
                    filterKey="employees"
                />
                <ModalMultiselect
                    title="Warunki zatrudnienia"
                    options={AGREEMENT_OPTIONS}
                    setModalRule={setModalRule}
                    isAnyModalOpen={isAnyModalOpen}
                    updateFilterValues={updateFilterValues}
                    filterKey="agreements"
                />
            </div>

            <div className="modal__button-container">
                <SecondaryButton buttonFunction={filterElements}>
                    WYŚWIETL
                </SecondaryButton>
            </div>
        </div>
    );
};

Modal.propTypes = {
    filterElements: PropTypes.func.isRequired,
    updateFilterValues: PropTypes.func.isRequired,
};
export default Modal;
