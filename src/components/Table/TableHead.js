import React from 'react';

export function TableHead({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map(({ name, accessor }) => (<th key={accessor}>{name}</th>))}
      </tr>
    </thead>
  );
}