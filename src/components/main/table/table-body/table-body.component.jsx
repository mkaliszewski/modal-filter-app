import React from 'react';
import PropTypes from 'prop-types';
import TableRowBody from '../table-row/table-row-body/table-row-body.component';
import { EMPLOYEE_PROPTYPES } from '../../helpers';
import './table-body.styles.scss';

const TableBody = ({ data, isValid }) => (
    <tbody
        className={`table-body ${!isValid ? 'table-body--empty' : undefined}`}
    >
        {isValid ? (
            data.map((employee) => (
                <TableRowBody data={employee} key={employee.id} />
            ))
        ) : (
            <tr>
                <td>Brak wyników spełniających wymagania</td>
            </tr>
        )}
    </tbody>
);

TableBody.propTypes = {
    data: PropTypes.arrayOf(EMPLOYEE_PROPTYPES),
    isValid: PropTypes.bool.isRequired,
};

TableBody.defaultProps = {
    data: [],
};

export default TableBody;
