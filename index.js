var url = require("url");

module.exports = function(){
  console.log("Parse:", url.parse("http://www.google.com"));
}
