var UglifyJS = require("uglify-js");

var result = UglifyJS.minify(code);

console.log( result.code );