const UglifyJS = require("uglify-js"),
path = require('path'),
fs = require('fs');


const api = {};

// create a dist object
api.createDistObj = (opt) => {
    opt = opt || {};
    // the starting dist object
    let dist = {
        sourceCode : opt.sourceCode || '',
        minCode : '',
        error: null
    };
    // try to use uglify.js and set dist.minCode or dist.error
    let ugly = UglifyJS.minify(dist.sourceCode);
    if(ugly.error){
        dist.error = ugly.error;
    }else{
        dist.minCode = ugly.code;
    }
    // return the dist object
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