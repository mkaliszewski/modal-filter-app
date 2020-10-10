import React from 'react';
import './modal.styles.scss';
import ModalMultiselect from './modal-multiselect/modal-multiselect.component';
import ModalDate from './modal-date/modal-date.component';
import SecondaryButton from '../../shared/buttons/secondary-button/secondary-button.component';

const Modal = () => {
    return (
        <div className="modal">
            <h2 className="modal__heading">Wybierz pracowników</h2>

            <div className="modal__multiselect-container">
                <ModalDate />
                <ModalMultiselect />
                <ModalMultiselect />
                <ModalMultiselect />
                <ModalMultiselect />
            </div>

            <div className="modal__button-container">
                <SecondaryButton>WYŚWIETL</SecondaryButton>
            </div>
        </div>
    );
};

export default Modal;
