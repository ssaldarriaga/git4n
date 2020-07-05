import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Th } from './Table.styles';

function Cell({ value, isSorted, direction, onClick, accessor }) {
  const icon = direction === 'asc' ? '\u2B9D' : '\u2B9F';
  const handleClick = () => {
    onClick(accessor);
  };

  return (
    <Th icon={icon}>
      <div className="cell__container" role="button" onClick={handleClick}>
        <span className="cell__container--value">{value}</span>
        {isSorted && <span className="cell__container--arrow" />}
      </div>
    </Th>
  );
};

Cell.propTypes = {
  value: PropTypes.string,
  isSorted: PropTypes.bool,
  direction: PropTypes.string,
  onClick: PropTypes.func,
  accessor: PropTypes.string,
};

export function TableHead({ columns, sortField, direction, onSort }) {
  return (
    <thead>
      <tr>
        {columns.map(({ name, accessor }) => (
          <Cell
            value={name}
            key={accessor}
            onClick={onSort}
            accessor={accessor}
            direction={direction}
            isSorted={accessor === sortField}
          />
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    accessor: PropTypes.string,
  })),
  sortField: PropTypes.string,
  direction: PropTypes.string,
  onSort: PropTypes.func,
};