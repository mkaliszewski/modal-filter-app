import React from 'react';
import Icon from '../../../../shared/icon/icon.component';
import {
    EMPLOYEE_PROPTYPES,
    formatDateToString,
    formatStringsFromArr,
} from '../../../helpers.js';
import { ICONS_NAMES } from '../../../../../mock-data/mock.data';
import './table-row-body.styles.scss';

/**
 * Component used as table row used in table body
 *
 * @param {Object} data single row data
 * @param {number} data.id id associated with record
 * @param {string} data.name name associated with record
 * @param {date} data.date date associated with record
 * @param {string} data.job job type associated with record
 * @param {string} data.agreement agreement type associated with record
 * @param {string} data.locations locations associated with record
 *
 * @return  {FC} TableRowBody component
 *
 * @component
 * @example
 * const data = {
 *                  id: 1,
 *                  name: 'John Smith',
 *                  date: new Date(),
 *                  job: 'cook',
 *                  agreement: 'pernament',
 *                  locations: ['loc1', 'loc2']
 *              }
 *
 * return (
 *    <TableRowBody data={data} />
 * )
 *
 */

const TableRowBody = ({ data }) => {
    const { name, date, job, agreement, locations } = data;

    return (
        <tr className="table-row-body">
            <td>{name}</td>
            <td className="table-row-body__cell--high">
                {formatDateToString(date)}
            </td>
            <td className="table-row-body__cell--high">{job}</td>
            <td className="table-row-body__cell--high">{agreement}</td>
            <td className="table-row-body__cell--high">
                {formatStringsFromArr(locations)}
            </td>
            <td className="table-row-body__cell--low">
                <Icon iconName={ICONS_NAMES.INFO} />
            </td>
        </tr>
    );
};

TableRowBody.propTypes = {
    data: EMPLOYEE_PROPTYPES.isRequired,
};
export default TableRowBody;
