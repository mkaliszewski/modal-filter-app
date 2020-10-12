import React from 'react';
import { formatDateToString, SEARCH_FILTERS_PROPTYPES } from '../helpers';
import './filters-info.styles.scss';

const FiltersInfo = ({ searchFilters }) => {
    const {
        date: { startDate, endDate },
        jobs,
        locations,
        agreements,
    } = searchFilters;

    const formatArrayToString = (arr) => {
        if (arr.length) {
            return arr.map((el, index) =>
                index === arr.length - 1 ? el : ` ${el}, `
            );
        }
        return '-';
    };

    return (
        <div className="filters-info">
            <p className="filters-info__title">Użyto następujących filtrów:</p>
            <p>
                <strong>Data początkowa</strong>:{' '}
                {formatDateToString(startDate)}
            </p>
            <p>
                <strong>Data końcowa</strong>: {formatDateToString(endDate)}
            </p>
            <p>
                <strong>Stanowiska:</strong> {formatArrayToString(jobs)}
            </p>
            <p>
                <strong>Lokalizacje:</strong> {formatArrayToString(locations)}
            </p>
            <p>
                <strong>Typ zatrudnienia</strong>:{' '}
                {formatArrayToString(agreements)}
            </p>
        </div>
    );
};

FiltersInfo.propTypes = {
    searchFilters: SEARCH_FILTERS_PROPTYPES.isRequired,
};

export default FiltersInfo;
