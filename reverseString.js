function reverseString(revString) {
  const array = [];
  array.push(revString);
  let store = '';
  for (let i = revString.length - 1; i >= 0; i -= 1) {
    store += array[0][i];
  }
  return store;
}

module.exports = reverseString;