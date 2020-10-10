import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../shared/icon/icon.component';
import './table-row.styles.scss';

const TableRow = ({ isHeading, rowData }) => {
    const transformDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
    };

    return (
        <tr
            className={`table-row ${
                isHeading ? 'table-row--heading' : 'table-row--default'
            }`}
        >
            {isHeading ? (
                <>
                    {rowData.map((heading, index) => (
                        <th
                            className={
                                index > 0
                                    ? `table-row__cell-heading--high`
                                    : undefined
                            }
                            key={heading}
                        >
                            {heading}
                        </th>
                    ))}

                    <th className="table-row__cell-heading--low">Szczegóły</th>
                </>
            ) : (
                <>
                    <td>{rowData.name}</td>
                    <td className="table-row__cell--high">
                        {transformDate(rowData.date)}
                    </td>
                    <td className="table-row__cell--high" key={rowData.job}>
                        {rowData.job}
                    </td>
                    <td className="table-row__cell--high">
                        {rowData.agreement}
                    </td>
                    <td className="table-row__cell--high">
                        {rowData.locations.map((loc, index) => {
                            if (index === rowData.locations.length - 1) {
                                return loc;
                            }
                            return `${loc}, `;
                        })}
                    </td>
                    <td className="table-row__cell--low">
                        <Icon />
                    </td>
                </>
            )}
        </tr>
    );
};

TableRow.propTypes = {
    isHeading: PropTypes.bool,
    rowData: PropTypes.oneOfType(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.instanceOf(Date).isRequired,
            job: PropTypes.string.isRequired,
            agreement: PropTypes.string.isRequired,
            locations: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
        PropTypes.arrayOf(PropTypes.string.isRequired)
    ).isRequired,
};

TableRow.defaultProps = {
    isHeading: false,
};

TableRow.propTypes = {};

export default TableRow;
