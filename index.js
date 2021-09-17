const path = require('path'),
buildTool = require( path.join(__dirname, 'lib/build-tool.js') );

let uri_build_conf = process.argv[2] ||  path.join(process.cwd(), 'build-conf.json');


let opt = {
    //fileName: "test_script",
    //dir_root: process.cwd(),
    //dir_target: 'dist'
    //sourceFiles: [
    // "./src/file1.js", "./src/file2.js", "./src/file3.js"
    //],
    //version: '0.0.0'
};

// start by reading the json file
buildTool.readConf(uri_build_conf)
.then((conf)=>{
   console.log(conf);
   opt = Object.assign(opt, conf);
   console.log(opt);
   return buildTool.createSource(opt);
})
.then((source)=>{
   opt.sourceCode = source.code;
   let dist = buildTool.createDistObj(opt);
   return buildTool.writeDist(dist);
})
.then((obj) => {
    //console.log(obj);
})
.catch((e) => {
    //console.log(e);
});

/*
// create source
buildTool.createSource(opt)
// what to do with source object
.then((source)=>{
   opt.sourceCode = source.code;
   let dist = buildTool.createDistObj(opt);
   return buildTool.writeDist(dist);
})
.then((obj) => {
    //console.log(obj);
})
.catch((e) => {
    //console.log(e);
});
*/