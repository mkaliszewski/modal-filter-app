import React from 'react';
import PropTypes from 'prop-types';
import TableHead from './table-head/table-head.component';
import TableBody from './table-body/table-body.component';
import TableFoot from './table-foot/table-foot.component';
import { EMPLOYEES_HEADERS } from '../../../mock-data/mock.data';
import { EMPLOYEE_PROPTYPES } from '../helpers';
import './table.styles.scss';

const Table = ({ data }) => {
    const dataLength = data.length;

    return (
        <table className="table">
            <TableHead data={EMPLOYEES_HEADERS} />
            <TableBody data={data} isValid={!!dataLength} />
            <TableFoot recordsNumber={dataLength} />
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
