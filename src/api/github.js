import { makeRequest, handleResponse } from '../utils/fetchUtils';

export async function getUser(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await makeRequest(url);
  return handleResponse(response)
}