import React from 'react';
import PropTypes from 'prop-types';
import TableRowHead from '../table-row/table-row-head/table-row-head.component';
import './table-head.styles.scss';

const TableHead = ({ data }) => (
    <thead className="table-head">
        <TableRowHead data={data} />
    </thead>
);

TableHead.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHead;
