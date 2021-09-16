const UglifyJS = require("uglify-js"),
path = require('path'),
fs = require('fs');


/*
fs.readFile(path.join(__dirname, 'test.js'), 'utf8', function (e, code) {
    if (code) {
        var result = UglifyJS.minify(code);
        console.log(result.code);
    } else {
        console.log(e);
    }

});
*/