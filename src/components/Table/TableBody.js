import React from 'react';
import PropTypes from 'prop-types';

function Row({ row, columns }) {
  return (
    <tr>
      {columns.map(({ accessor }) => (
        <td key={`cell-${row.id}-${accessor}`}>
          {row[accessor]}
        </td>
      ))}
    </tr>
  );
};

Row.propTypes = {
  row: PropTypes.objectOf(PropTypes.any),
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    accessor: PropTypes.string,
  })),
};

export function TableBody({ rows, columns }) {
  return (
    <tbody>
      {rows.map(row => (<Row key={row.id} row={row} columns={columns} />))}
    </tbody>
  );
};

TableBody.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    accessor: PropTypes.string,
  })),
};
