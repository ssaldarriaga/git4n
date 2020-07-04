const PRIVATE_VALUES = ['csrftoken', 'path']

/**
 * Parse the cookie values from string to object
 * @param {string} value - Cookie value *
 * @returns {object} Cookie values parsed to object.
 */
function parseCookieToObject(value = '') {
  if (typeof value !== 'string' || value.length === 0) return {};

  const data = value.split(';');
  return data.reduce(function(prev, current) {
    const [key, value] = current.trim().split('=')

    if (PRIVATE_VALUES.includes(key)) return prev;

    return {
      ...prev,
      [key]: value,
    };
  }, {});
}

/**
 * Gets the values of the cookie
 * @returns {object} All values of the cookie in an object structure
 */
function getCookie() {
  const decodedCookie = decodeURIComponent(document.cookie);
  const data = parseCookieToObject(decodedCookie)
  return data;
}

/**
 * Parse an object structure to cookie value
 * @param {object} value - Object with cookie values
 * @returns {string} A string value with valid cookie structure
 */
function parseObjectToCookie(value = {}) {
  if (typeof value !== 'object' || !value) return '';

  return Object.keys(value).reduce(function(prev, key) {
    const data = `${key}=${value[key]};`;

    return `${prev} ${data}`;
  }, 'path=/;');
}

/**
 * Sets values to the cookie
 * @param {object} value - Values which will be set to cookie
 */
function setCookie(value) {
  const parsedCookie = parseObjectToCookie(value);
  document.cookie = encodeURIComponent(parsedCookie);
}

export { getCookie, setCookie };