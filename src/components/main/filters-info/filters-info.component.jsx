import React from 'react';
import PropTypes from 'prop-types';
import {
    formatDateToString,
    formatStringsFromArr,
    SEARCH_FILTERS_PROPTYPES,
} from '../helpers';
import './filters-info.styles.scss';

/**
 * Component used as information of used filters in search
 *
 * @param {Object} searchFilters object with avaliable filters
 * @param {Object} searchFilters.date object with start and end date of search
 * @param {date} searchFilters.date.startDate start date of search
 * @param {date} searchFilters.date.endDate end date of search
 * @param {String[]} searchFilters.jobs array of job types search filters
 * @param {String[]} searchFilters.locations array of locations search filters
 * @param {String[]} searchFilters.agreements array of agreements types search filters
 * @param {boolean} isOpen decides if filter infos should be visible
 *
 * @return  {FC} FiltersInfo component
 *
 * @component
 * @example
 * const searchFilters = {
 *                          date: {
 *                               startDate: new Date(),
 *                               endDate: new Date(),
 *                          },
 *                          jobs: ['cook','waiter'],
 *                          locations: ['loc1', 'loc2'],
 *                          agreements: []
 *                       }
 * const isOpen = true;
 *
 * return (
 *    <FiltersInfo
 *      searchFilters={searchFilters}
 *      isOpen={isOpen}
 *    />
 * )
 *
 */

const FiltersInfo = ({ searchFilters, isOpen }) => {
    const {
        date: { startDate, endDate },
        jobs,
        locations,
        agreements,
    } = searchFilters;

    return (
        <div
            className={`filters-info filters-info--${
                isOpen ? 'open' : 'closed'
            }`}
        >
            <p className="filters-info__title">Użyto następujących filtrów:</p>
            <p>
                <strong>Data początkowa:</strong>{' '}
                {formatDateToString(startDate)}
            </p>
            <p>
                <strong>Data końcowa:</strong> {formatDateToString(endDate)}
            </p>
            <p>
                <strong>Stanowiska:</strong> {formatStringsFromArr(jobs)}
            </p>
            <p>
                <strong>Lokalizacje:</strong> {formatStringsFromArr(locations)}
            </p>
            <p>
                <strong>Typ zatrudnienia:</strong>{' '}
                {formatStringsFromArr(agreements)}
            </p>
        </div>
    );
};

FiltersInfo.propTypes = {
    searchFilters: SEARCH_FILTERS_PROPTYPES.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default FiltersInfo;
