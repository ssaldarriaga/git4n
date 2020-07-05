import React from 'react';

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
}

export function TableBody({ rows, columns }) {
  return (
    <tbody>
      {rows.map(row => (<Row key={row.id} row={row} columns={columns} />))}
    </tbody>
  );
}