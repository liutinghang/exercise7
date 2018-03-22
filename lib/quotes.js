module.exports = function (str) {
  // TODO
  let arr = str.split('"');
  const ret = [];
  for(let i = 1,len = arr.length; i < len; i+=2) {
    ret.push('"' +arr[i] +'"');
  }
  return ret;
}