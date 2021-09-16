const UglifyJS = require("uglify-js"),
path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
readFile = promisify(fs.readFile),
mkdirp = require( path.join(__dirname, 'mkdirp.js') );


const api = {};

// read a build-conf.json file to produce an opt object for buildTool.createSource
api.readConf = (uri) => {

};

// return a promise that will resolve to an object with code and error properties
// using an options object created directly or with buildTool.readConf. The options
// object should have at least a dir_root, and sourceFiles array
api.createSource = (opt) => {
    opt = opt || {};
    // dir_root should be whatever is given. The buildTool.readConf method should resolve this
    // to an absolute path. When using this method directly you should have the freedom to set this
    // to any path value.
    opt.dir_root = opt.dir_root || process.cwd();
    // there should be a sourceFiles array that is an array of relative paths
    // from opt.dir_root to each source code file
    return Promise.all(opt.sourceFiles.map((uri_source)=>{
        return readFile( path.join(opt.dir_root, uri_source), 'utf8' );
    }))
    .then((codeArray) => {
        return {
            error: null,
            code: codeArray.join('')
        };
    }).catch((e)=>{
        return {
            error: e,
            code: ''
        };
    });
};

// create a dist object
api.createDistObj = (opt) => {
    opt = opt || {};
    // the starting dist object
    let dist = {
        dir_root: opt.dir_root || process.cwd(),
        // dist.dir_target should be a realtive path from opt.dir_root
        dir_target: path.join(opt.dir_root, opt.dir_target || 'dist'),
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

// write th given dist object to the dist.dir_target path
api.writeDist = (dist) => {

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