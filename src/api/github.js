import { makeRequest, handleResponse, objectToQueryParams } from '../utils/fetchUtils';

async function getUser(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await makeRequest(url);
  return handleResponse(response);
};

async function getRepositories(username, params = {}, search = '', signal) {
  const query = `user:${username}+${search}+in:name`;
  const url = `https://api.github.com/search/repositories?q=${query}&${objectToQueryParams(params)}`;
  const response = await makeRequest(url, { signal });
  return handleResponse(response);
};

export { getUser, getRepositories };
