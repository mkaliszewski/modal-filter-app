import React from 'react';
import PropTypes from 'prop-types';
import TableRowHead from './table-row/table-row-head/table-row-head.component';
import TableRowBody from './table-row/table-row-body/table-row-body.component';
import { EMPLOYEES_HEADERS } from '../../../mock-data/mock.data';
import { EMPLOYEE_PROPTYPES } from '../helpers';
import './table.styles.scss';

/**
 * Component used as table
 *
 * @param {Object[]} data array of data with records details
 * @param {number} data[].id id associated with record
 * @param {string} data[].name name associated with record
 * @param {date} data[].date date associated with record
 * @param {string} data[].job job type associated with record
 * @param {string} data[].agreement agreement type associated with record
 * @param {string} data[].locations locations associated with record
 *
 * @return  {FC} Table component
 *
 * @component
 * @example
 * const data = [{
 *                  id: 1,
 *                  name: 'John Smith',
 *                  date: new Date(),
 *                  job: 'cook',
 *                  agreement: 'pernament',
 *                  locations: ['loc1', 'loc2']
 *              }]
 *
 * return (
 *    <Table data={data} />
 * )
 *
 */

const Table = ({ data }) => {
    const dataLength = data.length;

    return (
        <table className="table">
            <thead className="table__head">
                <TableRowHead data={EMPLOYEES_HEADERS} />
            </thead>

            <tbody
                className={`table__body ${
                    !dataLength ? 'table__body--empty' : undefined
                }`}
            >
                {dataLength ? (
                    data.map((employee) => (
                        <TableRowBody data={employee} key={employee.id} />
                    ))
                ) : (
                    <tr>
                        <td>Brak wyników spełniających wymagania</td>
                    </tr>
                )}
            </tbody>
            <tfoot className="table__foot">
                <tr>
                    <td>Suma rekordów wynosi: {dataLength}</td>
                </tr>
            </tfoot>
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(EMPLOYEE_PROPTYPES),
};

Table.defaultProps = {
    data: [],
};
export default Table;
