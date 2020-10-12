import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './table-row/table-row.component';
import { EMPLOYEES_HEADERS } from '../../../mock-data/mock.data';
import './table.styles.scss';

const Table = ({ data }) => {
    const isDataValid = !!data.length;

    return (
        <table className="table-custom">
            <thead className="table-custom__thead">
                <TableRow rowData={EMPLOYEES_HEADERS} isHeading />
            </thead>
            <tbody
                className={`table-custom__tbody ${
                    !isDataValid ? 'table-custom__body--empty' : undefined
                }`}
            >
                {isDataValid ? (
                    data.map((employee) => (
                        <TableRow rowData={employee} key={employee.id} />
                    ))
                ) : (
                    <tr>
                        <td>Brak wyników spełniających wymagania</td>
                    </tr>
                )}
            </tbody>
            <tfoot className="table-custom__tfoot">
                <tr>
                    <td>Suma rekordów wynosi: {data.length}</td>
                </tr>
            </tfoot>
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired,
            job: PropTypes.string.isRequired,
            agreement: PropTypes.string.isRequired,
            locations: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ),
};

Table.defaultProps = {
    data: [],
};
export default Table;
