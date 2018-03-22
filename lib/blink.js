var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  return md.replace(/@@([^@]*)@@/g,"<blink>$1</blink>").replace(/\*\*([^*]*)\*\*/g, "<em>$1</em");
}