module.exports = function (str) {
  // TODO
  const ret = str.match(/x=(\d+)/)
  return ret? ret[1] : ret;
}