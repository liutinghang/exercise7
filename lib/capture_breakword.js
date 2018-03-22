module.exports = function (str) {
  // TODO
  const ret = str.match(/(?:^|\s)x=(\d+)(?:\s|$)/);
  return ret? ret[1] : ret;
}