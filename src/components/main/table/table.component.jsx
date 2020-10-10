import React from 'react';
import './table.styles.scss';
import TableRow from './table-row/table-row.component';
import { EMPLOYEES_HEADERS, EMPLOYEES } from '../../../mock-data/mock.data';

function Table() {
    return (
        <table className="table-custom">
            <thead className="table-custom__thead">
                <TableRow rowData={EMPLOYEES_HEADERS} isHeading />
            </thead>
            <tbody className="table-custom__tbody">
                {EMPLOYEES.map((employee) => (
                    <TableRow rowData={employee} key={employee.id} />
                ))}
            </tbody>
            <tfoot className="table-custom__tfoot">
                <tr>
                    <td>Suma rekordów wynosi: {EMPLOYEES.length}</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;
