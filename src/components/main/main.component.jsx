import React, { useState, useEffect } from 'react';
import PrimaryButton from '../shared/buttons/primary-button/primary-button.component';
import TextInput from './inputs/text-input/text-input.component';
import Table from './table/table.component';
import Modal from './modal/modal.component';
import Backdrop from '../shared/backdrop/backdrop.component';
import FiltersInfo from './filters-info/filters-info.component';
import {
    EMPLOYEES,
    INITIAL_FILTERS,
    JOB_FILTERS,
} from '../../mock-data/mock.data';
import { filterName, filterThroughFilters } from './helpers';
import './main.styles.scss';

const Main = () => {
    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isFiltersInfoOpen, setIsFiltersInfoOpen] = useState(false);
    const [nameSearchValue, setNameSearchValue] = useState('');
    const [searchFilters, setSearchFilters] = useState(INITIAL_FILTERS);
    const [filtredRecords, setFiltredRecords] = useState([]);
    const [tableData, setTableData] = useState([]);

    // component handlers

    // component handlers - modal
    const openFiltersModal = () => {
        setIsFiltersModalOpen(true);
    };

    const closeFiltersModal = () => {
        setIsFiltersModalOpen(false);
    };

    // component handlers - table
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

    // modal handlers

    const startFilters = () => {
        setNameSearchValue('');
        openFiltersModal();
    };

    const handleTableDisplay = () => {
        setTableData(searchFilters.employees);
        closeFiltersModal();
        displayTable();
    };

    // name search handlers

    const handeNameSearchChange = ({ target: { value } }) => {
        setNameSearchValue(value);
    };

    const handleNameSearchKeyPress = ({ key }) => {
        if (key === 'Enter') {
            displayTable();
        }
    };

    // filters change handlers

    const updateFilterValues = (filterKey, value) => {
        setSearchFilters({ ...searchFilters, [filterKey]: value });
    };

    useEffect(() => {
        setTableData(filterName(nameSearchValue, EMPLOYEES));
    }, [nameSearchValue]);

    useEffect(() => {
        setFiltredRecords(filterThroughFilters(searchFilters, EMPLOYEES));
    }, [searchFilters]);

    const { employees, ...basicFilters } = searchFilters;

    const areFiltersEmpty =
        JSON.stringify(basicFilters) === JSON.stringify(JOB_FILTERS);

    // filters info handler

    const openFilterInfo = () => {
        setIsFiltersInfoOpen(true);
    };

    const closeFilterInfo = () => {
        setIsFiltersInfoOpen(false);
    };

    // reset handler

    const resetToInitialState = () => {
        hideTable();
        setNameSearchValue('');
        setSearchFilters(INITIAL_FILTERS);
        setFiltredRecords([]);
        setTableData(EMPLOYEES);
    };

    return (
        <article className="main">
            {isTableVisible ? (
                <section
                    onClick={isFiltersInfoOpen ? closeFilterInfo : null}
                    className="main__section-table"
                >
                    <Table data={tableData} />
                    <div className="main__filters-info-container">
                        <FiltersInfo
                            searchFilters={searchFilters}
                            isOpen={isFiltersInfoOpen}
                        />
                        <PrimaryButton
                            text="PONÓW"
                            buttonFunction={resetToInitialState}
                        />
                        <PrimaryButton
                            text="FILTRY"
                            buttonFunction={openFilterInfo}
                            customCSSClass="primary-button--filters"
                        />
                    </div>
                </section>
            ) : (
                <section className="main__section-search">
                    <div className="main__input-container">
                        <TextInput
                            placeholder="Wyszukaj po imieniu i nazwisku..."
                            handeNameSearchChange={handeNameSearchChange}
                            handleKeyPress={handleNameSearchKeyPress}
                        />
                    </div>
                    <div className="main__buttons-container">
                        <PrimaryButton
                            text="SZUKAJ"
                            buttonFunction={displayTable}
                        />
                        <PrimaryButton
                            text="FILTRUJ"
                            buttonFunction={startFilters}
                        />
                    </div>
                </section>
            )}

            {isFiltersModalOpen && (
                <section>
                    <Modal
                        updateFilterValues={updateFilterValues}
                        handleTableDisplay={handleTableDisplay}
                        filtredRecords={filtredRecords}
                        isEmployeeSelected={!!searchFilters.employees.length}
                        areFiltersEmpty={areFiltersEmpty}
                        modalCloseFunction={closeFiltersModal}
                    />
                    <Backdrop />
                </section>
            )}

            {isLoading && <Backdrop>Loading...</Backdrop>}
        </article>
    );
};

export default Main;
