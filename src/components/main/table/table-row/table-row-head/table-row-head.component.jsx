import React from 'react';
import PropTypes from 'prop-types';
import './table-row-head.styles.scss';

/**
 * Component used as table row used in table head
 *
 * @param {String[]} data array of strings displayed as table headings
 *
 * @return  {FC} TableRowHead component
 *
 * @component
 * @example
 * const data = ['headingOne', 'headingTwo']
 *
 * return (
 *    <TableRowHead data={data} />
 * )
 *
 */

const TableRowHead = ({ data }) => (
    <tr className="table-row-head">
        <>
            {data.map((heading, index) => (
                <th
                    className={
                        index > 0 ? `table-row-head__cell--high` : undefined
                    }
                    key={heading}
                >
                    {heading}
                </th>
            ))}

            <th className="table-row-head__cell--low">Szczegóły</th>
        </>
    </tr>
);

TableRowHead.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default TableRowHead;
