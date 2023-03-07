function capitalize(string) {
  if (string.length > 0 && typeof string === 'string') {
    return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
  }
  if (string.length === 0 && typeof string === 'string') {
    return ('empty string');
  }

  throw new Error('Not a string');
}

module.exports = capitalize;
