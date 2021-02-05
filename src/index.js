exports.min = function min (array) {
  return (array && array.length > 0)
    ? array.reduce((previous, current) => Math.min(previous, current))
    : 0;
}

exports.max = function max (array) {
  return (array && array.length > 0)
    ? array.reduce((previous, current) => Math.max(previous, current))
    : 0;
}

exports.avg = function avg (array) {
  return (array && array.length > 0)
    ? array.reduce((sum, element) => sum + element) / array.length
    : 0;
}
