import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';

// Components
import { SearchRepo } from './SearchRepo';
import { Table } from '../../components/Table';
import { RepositoriesContainer } from './UserInformation.styles';

// Utils & Assets
import { getRepositories } from '../../api/github';

const PER_PAGE = 5;

const columns = [
  {
    name: 'Name',
    accessor: 'name',
  },
  {
    name: 'description',
    accessor: 'description',
  },
  {
    name: 'Language',
    accessor: 'language',
  },
  {
    name: 'Branch',
    accessor: 'default_branch',
  },
  {
    name: 'Git URL',
    accessor: 'git_url',
  },
]

function sortData(data, field, direction) {
  let sortedData = data.sort((prev, next) => {
    const prevValue = prev[field] || '';
    const nextValue = next[field] || '';

    return prevValue.localeCompare(nextValue);
  });

  if (direction === 'desc') {
    sortedData = sortedData.reverse()
  }

  return sortedData;
}

export function Repositories({ username }) {
  const [repositories, setRepositories] = useState({
    data: null,
    page: 1,
    sortField: 'name',
    sortDirection: 'asc',
    totalCount: 0,
  });

  const loadRepositories = async (user, page, search = '', signal) => {
    const { data, isSuccessful } = await getRepositories(user, { page, per_page: PER_PAGE }, search, signal);
    if (isSuccessful) {
      setRepositories(prev => ({
        ...prev,
        data: sortData(data.items, prev.sortField, prev.sortDirection),
        page,
        totalCount: data.total_count
      }));
    }
  };

  useEffect(() => {
    if (repositories.data == null) {
      loadRepositories(username, 1);
    }
  }, [repositories.data, username]);

  const handleNextPage = useCallback(() => {
    const newPage = repositories.page + 1;
    loadRepositories(username, newPage)
  }, [repositories.page, username]);

  const handlePreviousPage = useCallback(() => {
    const newPage = Math.max(repositories.page - 1, 1);
    loadRepositories(username, newPage)
  }, [repositories.page, username]);

  const handleSearch = useCallback((value, signal) => {
    loadRepositories(username, 1, value, signal)
  }, [username]);

  const handleSort = useCallback((field) => {
    const { sortDirection, data } = repositories;
    const direction = sortDirection === 'asc' ? 'desc' : 'asc';

    const sortedData = sortData(data, field, direction);

    setRepositories(prev => ({ ...prev, data: sortedData, sortField: field, sortDirection: direction }));
  }, [repositories]);

  if (!repositories.data) return <span>Loading...</span>;

  return (
    <RepositoriesContainer>
      <h3 className="mb-3">Repositories</h3>
      <SearchRepo onSearch={handleSearch}/>
      <Table
        columns={columns}
        data={repositories.data}
        // Pagination
        page={repositories.page}
        onNextPage={handleNextPage}
        hasNextPage={repositories.page * PER_PAGE < repositories.totalCount}
        onPreviousPage={handlePreviousPage}
        // Sort
        onSort={handleSort}
        sortField={repositories.sortField}
        sortDirection={repositories.sortDirection}
      />
    </RepositoriesContainer>
  );
};

Repositories.propTypes = {
  username: PropTypes.string,
};