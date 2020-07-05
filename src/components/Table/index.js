import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { TableFooter } from './TableFooter';

export function Table({
  columns = [],
  data = [],
  page,
  hasNextPage,
  onNextPage = () =>{},
  onPreviousPage = () => {},
  onSort = () => {},
}) {

  return (
    <table className="table table-hover table-bordered">
      <TableHead columns={columns} onSort={onSort} />
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
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    accessor: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.object),
  onNextPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  onSort: PropTypes.func,
};