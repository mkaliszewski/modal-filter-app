import React, { useState } from 'react';
import PrimaryButton from '../shared/buttons/primary-button/primary-button.component';
import TextInput from './inputs/text-input/text-input.component';
import Table from './table/table.component';
import Modal from './modal/modal.component';
import Backdrop from '../shared/backdrop/backdrop.component';
import './main.styles.scss';

const Main = () => {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

    const openFiltersModal = () => {
        setIsFiltersModalOpen(true);
    };

    const closeFiltersModal = () => {
        setIsFiltersModalOpen(false);
    };

    return (
        <article className="main">
            <section className="main__section-top">
                <TextInput placeholder="Wyszukaj po imieniu i nazwisku..." />
                <PrimaryButton buttonFunction={openFiltersModal}>
                    WYSZUKAJ PRACOWNIKÓW
                </PrimaryButton>
                <PrimaryButton
                    isHighResolution
                    buttonFunction={openFiltersModal}
                >
                    FILTRUJ
                </PrimaryButton>
            </section>
            <section className="main__section-middle">
                <Table />
            </section>
            <section>
                {isFiltersModalOpen && (
                    <>
                        <Modal />
                        <Backdrop closeFunction={closeFiltersModal} />
                    </>
                )}
            </section>
        </article>
    );
};

export default Main;
