const middle = function (array) {
  let length = (array.length / 2)
  if (array.length === 1 || array.length === 2) {
    array = []
    return array
  }
  if (array.length % 2 === 0) {
    return [array[length], array[length - 1]];
  }
  if (array.length % 2 !== 0) {
    length = Math.floor(length)
    return [array[length]];
  }
}
module.exports = middle