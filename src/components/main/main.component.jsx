import React, { useState, useEffect } from 'react';
import PrimaryButton from '../shared/buttons/primary-button/primary-button.component';
import TextInput from './inputs/text-input/text-input.component';
import Table from './table/table.component';
import Modal from './modal/modal.component';
import Backdrop from '../shared/backdrop/backdrop.component';
import { EMPLOYEES } from '../../mock-data/mock.data';
import { filterName, filterThroughFilters } from './helpers';
import './main.styles.scss';

const INITIAL_FILTERS = {
    date: {
        startDate: null,
        endDate: null,
    },
    jobs: [],
    locations: [],
    agreements: [],
    employees: [],
};

const Main = () => {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // primary name state
    const [nameSearchValue, setNameSearchValue] = useState('');
    const [filtredNames, setFiltredNames] = useState(EMPLOYEES);

    // filters state
    const [searchFilters, setSearchFilters] = useState(INITIAL_FILTERS);

    // table data

    const [tableData, setTableData] = useState(filtredNames);

    // component handlers
    const openFiltersModal = () => {
        setIsFiltersModalOpen(true);
    };

    const closeFiltersModal = () => {
        setIsFiltersModalOpen(false);
    };

    const displayTable = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsTableVisible(true);
        }, 1000);
    };

    const hideTable = () => {
        setIsTableVisible(false);
    };

    // name search handler
    const searchName = () => {
        setTableData(filtredNames);
        displayTable();
    };

    // modal display handlers

    const startFilters = () => {
        setNameSearchValue('');
        openFiltersModal();
    };

    const filterElements = () => {
        setTableData(searchFilters.employees);
        closeFiltersModal();
        displayTable();
    };

    // name search handlers

    const handeNameSearchChange = ({ target: { value } }) => {
        setNameSearchValue(value);
    };

    const handleKeypress = ({ key }) => {
        if (key === 'Enter') {
            displayTable();
        }
    };

    // filters change handlers

    const updateFilterValues = (filterKey, value) => {
        if (filterKey === 'date') {
            setSearchFilters({
                ...searchFilters,
                date: value,
            });
        } else {
            setSearchFilters({ ...searchFilters, [filterKey]: value });
        }
    };

    useEffect(() => {
        setFiltredNames(filterName(nameSearchValue, EMPLOYEES));
    }, [nameSearchValue]);

    useEffect(() => {
        setFiltredNames(filterThroughFilters(searchFilters, EMPLOYEES));
    }, [searchFilters]);

    const resetFiltredNames = () => {
        hideTable();
        setSearchFilters(INITIAL_FILTERS);
    };

    return (
        <article className="main">
            {isTableVisible ? (
                <section className="main__section-middle">
                    <Table data={tableData} />
                    <PrimaryButton buttonFunction={resetFiltredNames}>
                        PONÓW
                    </PrimaryButton>
                </section>
            ) : (
                <section className="main__section-top">
                    <div className="main__input-container">
                        <TextInput
                            placeholder="Wyszukaj po imieniu i nazwisku..."
                            handeNameSearchChange={handeNameSearchChange}
                            handleKeypress={handleKeypress}
                        />
                    </div>
                    <div className="main__buttons-container">
                        <PrimaryButton buttonFunction={searchName}>
                            SZUKAJ
                        </PrimaryButton>
                        <PrimaryButton buttonFunction={startFilters}>
                            FILTRUJ
                        </PrimaryButton>
                    </div>
                </section>
            )}

            {isFiltersModalOpen && (
                <section>
                    <Modal
                        filterElements={filterElements}
                        updateFilterValues={updateFilterValues}
                        employees={filtredNames}
                    />
                    <Backdrop closeFunction={closeFiltersModal} />
                </section>
            )}

            {isLoading && (
                <section>
                    <Backdrop>Loading...</Backdrop>
                </section>
            )}
        </article>
    );
};

export default Main;
