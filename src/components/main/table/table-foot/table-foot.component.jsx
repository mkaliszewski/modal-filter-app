import React from 'react';
import PropTypes from 'prop-types';
import './table-foot.styles.scss';

const TableFoot = ({ recordsNumber }) => (
    <tfoot className="table-foot">
        <tr>
            <td>Suma rekordów wynosi: {recordsNumber}</td>
        </tr>
    </tfoot>
);

TableFoot.propTypes = {
    recordsNumber: PropTypes.number.isRequired,
};

export default TableFoot;
