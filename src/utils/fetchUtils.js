const methodsAllowed = ['GET', 'POST'];

function objectToQueryParams(params = {}) {
  return Object.keys(params).reduce(function(prev, current) {
    const value = params[current];
    if (!value) return prev;

    return `${prev}${current}=${value}&`;
  }, '');
}

/**
 * Check the HTTP method
 * @param {string} method - HTTP method
 * @returns {string} Returns a valid HTTP method
 */
function getMethod(method = 'GET') {
  if (!methodsAllowed.includes(method)) {
    throw new Error(`Method ${method} is not allowed`)
  }

  return method;
}

/**
 * Check the HTTP payload
 * @param {object} body - Object with data for the HTTP request
 * @param {string} method - HTTP method
 * @returns {string} Parsed payload data
 */
function getBody(body = {}, method = 'POST') {
  if (method === 'GET') return;

  let payload = body;
  try {
    if (typeof body === 'string') {
      payload = JSON.parse(body)
    }
  } catch (error) {
    payload = {};
  }

  return JSON.stringify(payload);
}

/**
 * Check the HTTP headers
 * @param {object} headers - Headers for the HTTP request
 * @returns {object} Valid HTTP object headers
 */
function getHeaders(headers = {}) {
  if (!headers || typeof headers !== 'object') {
    throw new Error(`The headers sent is not valid`);
  }

  const defaultHeaders = {
    'Content-Type': 'application/json'
  };

  return {
    ...defaultHeaders,
    ...headers,
  };
}

/**
 * Evaluates a valid status code
 * @param {number} status - Status code of the HTTP request
 * @returns {boolean} If the status code is valid
 */
function isSuccessful(status) {
  return status >= 200 && status < 400;
}

/**
 * Make a HTTP request using fetch API
 * @param {string} url - Endpoint for making the request
 * @param {object} options - Request options
 * @param {object} options.method - Method for the request
 * @param {object} options.body - Data for the request
 * @param {object} options.headers - Headers for the request
 */
async function makeRequest(url, options = {}) {
  const method = getMethod(options.method);
  const body = getBody(options.body, method);
  const headers = getHeaders(options.headers);
  const signal = options.signal;

  return fetch(url, { method, body, headers, signal });
}

/**
 * Evaluates and parse the response of HTTP request
 * @param {object} response - HTTP response object
 * @returns {object} Parsed request data and status code
 */
async function handleResponse(response) {
  const data = {
    code: response.status,
    isSuccessful: isSuccessful(response.status),
  };

  try {
    data.data = await response.json();
  } catch (error) {
    data.data = error;;
  }

  return data;
}

export { makeRequest, handleResponse, objectToQueryParams };