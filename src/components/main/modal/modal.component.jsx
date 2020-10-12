import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalMultiselect from './modal-multiselect/modal-multiselect.component';
import ModalDate from './modal-date/modal-date.component';
import SecondaryButton from '../../shared/buttons/secondary-button/secondary-button.component';
import { MULTISELECTABLE_OPTIONS } from '../../../mock-data/mock.data';
import { EMPLOYEE_PROPTYPES } from '../helpers';
import './modal.styles.scss';

const Modal = ({
    updateFilterValues,
    handleTableDisplay,
    filtredRecords,
    isEmployeeSelected,
    areFiltersEmpty,
    modalCloseFunction,
}) => {
    const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

    const handleModalRuleChange = (rule) => {
        setIsAnyModalOpen(rule);
    };
    return (
        <div className="modal">
            <button
                onClick={modalCloseFunction}
                className="modal__close-button"
                type="button"
            >
                x
            </button>
            <h2 className="modal__heading">Wybierz pracowników</h2>

            <div className="modal__select-container">
                <ModalDate
                    handleModalRuleChange={handleModalRuleChange}
                    isAnyModalOpen={isAnyModalOpen}
                    updateFilterValues={updateFilterValues}
                />

                {MULTISELECTABLE_OPTIONS.map(
                    ({ title, options, filterKey }) => (
                        <ModalMultiselect
                            title={title}
                            options={options}
                            handleModalRuleChange={handleModalRuleChange}
                            isAnyModalOpen={isAnyModalOpen}
                            updateFilterValues={updateFilterValues}
                            filterKey={filterKey}
                            areFiltersEmpty={areFiltersEmpty}
                            filtredRecords={filtredRecords}
                            key={filterKey}
                        />
                    )
                )}
            </div>

            <div className="modal__button-container">
                <SecondaryButton
                    text="WYŚWIETL"
                    buttonFunction={handleTableDisplay}
                    isDisabled={!isEmployeeSelected}
                />
            </div>
        </div>
    );
};

Modal.propTypes = {
    updateFilterValues: PropTypes.func.isRequired,
    handleTableDisplay: PropTypes.func.isRequired,
    filtredRecords: PropTypes.arrayOf(EMPLOYEE_PROPTYPES).isRequired,
    isEmployeeSelected: PropTypes.bool.isRequired,
    areFiltersEmpty: PropTypes.bool.isRequired,
    modalCloseFunction: PropTypes.func.isRequired,
};

export default Modal;
