import React from 'react';
import PropTypes from 'prop-types';

// Components
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { TableFooter } from './TableFooter';

export function Table({
  columns = [],
  data = [],
  // Pagination
  page,
  hasNextPage,
  onNextPage = () =>{},
  onPreviousPage = () => {},
  // Sort
  sortField,
  sortDirection,
  onSort = () => {},
}) {

  return (
    <table className="table table-hover table-bordered">
      <TableHead
        onSort={onSort}
        columns={columns}
        sortField={sortField}
        direction={sortDirection}
      />
      <TableBody columns={columns} rows={data} />
      <TableFooter
        colSpan={columns.length}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        disabledNextPage={!hasNextPage}
        disabledPreviousPage={page === 1}
      />
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    accessor: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.object),
  // Pagination
  page: PropTypes.number,
  hasNextPage: PropTypes.bool,
  onNextPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  // Sort
  sortField: PropTypes.string,
  sortDirection: PropTypes.string,
  onSort: PropTypes.func,
};