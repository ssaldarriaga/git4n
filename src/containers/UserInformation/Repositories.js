import React, { useState, useEffect, useCallback, useRef } from 'react';

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
    name: 'Default branch',
    accessor: 'default_branch',
  },
  {
    name: 'Git URL',
    accessor: 'git_url',
  },
]

export function Repositories({ username }) {
  const [repositories, setRepositories] = useState({ data: null, page: 1, sort: 'name', totalCount: 0 });

  const loadRepositories = async (user, page, search = '', signal) => {
    const { data, isSuccessful } = await getRepositories(user, { page, per_page: PER_PAGE }, search, signal);
    if (isSuccessful) {
      setRepositories(prev => ({ ...prev, data: data.items, page, totalCount: data.total_count }));
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

  if (!repositories.data) return <span>Loading...</span>;

  return (
    <RepositoriesContainer>
      <h3 className="mb-3">Repositories</h3>
      <SearchRepo onSearch={handleSearch}/>
      <Table
        columns={columns}
        data={repositories.data}
        page={repositories.page}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        hasNextPage={repositories.page * PER_PAGE < repositories.totalCount}
      />
    </RepositoriesContainer>
  );
}