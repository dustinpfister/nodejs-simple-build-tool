const UglifyJS = require("uglify-js"),
path = require('path'),
fs = require('fs');


const api = {};

// create a dist object
api.createDist = (opt) => {
    opt = opt || {};

    let dist = {
        sourceCode : opt.sourceCode || ''
    };

    return dist;
};

module.exports = api;

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