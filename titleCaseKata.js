const titleCase = function (text) {
  // Your code in here ...

  let splitting = text.split(' ')
  let afterEdit = splitting.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  })
  let finalString = afterEdit.join(' ')
  return finalString;
};
module.exports = titleCase;