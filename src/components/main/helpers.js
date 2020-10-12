import PropTypes from 'prop-types';

export const filterName = (searchName, arr) =>
    arr.filter((element) => {
        const elementName = element?.name ? element.name : element;
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

export const EMPLOYEE_PROPTYPES = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    job: PropTypes.string.isRequired,
    agreement: PropTypes.string.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired,
});
