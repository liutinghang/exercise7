module.exports = function (str) {
  // TODO
  const regExp = /^((0x[0-9a-fA-F]{2,2})(\s+)){8,8}$/;
  return regExp.test(str);
}