import React, { useState, useEffect } from 'react';
import PrimaryButton from '../shared/buttons/primary-button/primary-button.component';
import TextInput from './inputs/text-input/text-input.component';
import Table from './table/table.component';
import Modal from './modal/modal.component';
import Backdrop from '../shared/backdrop/backdrop.component';
import { EMPLOYEES, INITIAL_FILTERS } from '../../mock-data/mock.data';
import { filterName, filterThroughFilters } from './helpers';
import './main.styles.scss';

const Main = () => {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // primary name state
    const [nameSearchValue, setNameSearchValue] = useState('');

    // filters state
    const [searchFilters, setSearchFilters] = useState(INITIAL_FILTERS);
    const [filtredRecords, setFiltredRecords] = useState([]);

    // table data

    const [tableData, setTableData] = useState([]);

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
        setTableData(filterName(nameSearchValue, EMPLOYEES));
    }, [nameSearchValue]);

    useEffect(() => {
        setFiltredRecords(filterThroughFilters(searchFilters, EMPLOYEES));
    }, [searchFilters]);

    const resetFiltredNames = () => {
        hideTable();
        setNameSearchValue('');
        setSearchFilters(INITIAL_FILTERS);
    };

    const transformDate = (date) => {
        if (date instanceof Date) {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
        }
        return '-';
    };

    const displayFilterValues = (arr) => {
        if (arr.length) {
            return arr.map((el, index) =>
                index === arr.length - 1 ? el : `${el}, `
            );
        }
        return '-';
    };

    return (
        <article className="main">
            {isTableVisible ? (
                <section className="main__section-middle">
                    <Table data={tableData} />
                    <PrimaryButton buttonFunction={resetFiltredNames}>
                        PONÓW
                    </PrimaryButton>
                    <div>
                        Użyto następujących filtrów:
                        <br />
                        Data początkowa:
                        {transformDate(searchFilters.date.startDate)} <br />
                        Data końcowa:{' '}
                        {transformDate(searchFilters.date.endDate)} <br />
                        Stanowiska: {displayFilterValues(searchFilters.jobs)}
                        <br />
                        Lokalizacje:{' '}
                        {displayFilterValues(searchFilters.locations)}
                        <br />
                        Typ zatrudnienia:
                        {displayFilterValues(searchFilters.agreements)}
                        <br />
                    </div>
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
                        <PrimaryButton buttonFunction={displayTable}>
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
                        searchFilters={{
                            date: searchFilters.date,
                            jobs: searchFilters.jobs,
                            locations: searchFilters.locations,
                            agreements: searchFilters.agreements,
                        }}
                        isEmployeeSelected={!!searchFilters.employees.length}
                        filtredEmployees={searchFilters.employees}
                        filtredRecords={filtredRecords}
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
