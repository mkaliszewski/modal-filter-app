import React from 'react';
import Icon from '../../../../shared/icon/icon.component';
import { EMPLOYEE_PROPTYPES, formatDateToString } from '../../../helpers.js';
import { ICONS_NAMES } from '../../../../../mock-data/mock.data';
import './table-row-body.styles.scss';

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
                {locations.map((loc, index) =>
                    index === locations.length - 1 ? loc : `${loc}, `
                )}
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
