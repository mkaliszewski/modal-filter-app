import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// window width hook

const getWindowWidth = () => window.innerWidth;

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        const handleWindowWithChange = () => {
            setWindowWidth(getWindowWidth());
        };
        window.addEventListener('resize', handleWindowWithChange);

        return () =>
            window.removeEventListener('resize', handleWindowWithChange);
    }, []);

    return windowWidth;
};

// filters

export const filterName = (searchName, arr) =>
    arr.filter((element) => {
        const elementName =
            typeof element === 'string' ? element : element.name;
        return searchName
            ? elementName.toLowerCase().includes(searchName.toLowerCase())
            : element;
    });

export const filterThroughFilters = (filters, arr) => {
    const {
        date: { startDate, endDate },
        jobs,
        locations,
        agreements,
    } = filters;

    const filterStartDate = (element) =>
        startDate ? element.date >= startDate : element;
    const filterEndDate = (element) =>
        endDate ? element.date <= endDate : element;

    const filterJobs = (element) =>
        jobs.length ? jobs.includes(element.job) : element;

    const filterLocations = (element) =>
        locations.length
            ? locations.some((loc) => element.locations.includes(loc))
            : element;

    const filterAgreements = (element) =>
        agreements.length ? agreements.includes(element.agreement) : element;

    return arr
        .filter(filterStartDate)
        .filter(filterEndDate)
        .filter(filterJobs)
        .filter(filterLocations)
        .filter(filterAgreements);
};

export const formatDateToString = (fullDate) => {
    if (fullDate instanceof Date) {
        const day = fullDate.getDay();
        const month = fullDate.getMonth() + 1;
        const year = fullDate.getFullYear();

        return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
    }
    return '-';
};

// proptypes

export const EMPLOYEE_PROPTYPES = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    job: PropTypes.string.isRequired,
    agreement: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export const SEARCH_FILTERS_PROPTYPES = PropTypes.shape({
    date: PropTypes.shape({
        startDate: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.oneOf([null]),
        ]),
        endDate: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.oneOf([null]),
        ]),
    }),
    jobs: PropTypes.arrayOf(PropTypes.string),
    locations: PropTypes.arrayOf(PropTypes.string),
    agreements: PropTypes.arrayOf(PropTypes.string),
    employees: PropTypes.arrayOf(EMPLOYEE_PROPTYPES),
});
