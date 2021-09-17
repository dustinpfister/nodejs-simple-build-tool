const path = require('path'),
buildTool = require( path.join(__dirname, 'lib/build-tool.js') );

let uri_build_conf = process.argv[2] ||  path.join(process.cwd(), 'build-conf.json');

buildTool.readConf(uri_build_conf)
.then((opt)=>{
   console.log(opt);
});


/*
let opt = {
    fileName: "test_script",
    dir_root: path.join(__dirname, 'demo'),
    dir_target: 'dist',
    sourceFiles: [
     "./src/file1.js", "./src/file2.js", "./src/file3.js"
    ],
    version: '0.0.0'
};

// create source
buildTool.createSource(opt)
// what to do with source object
.then((source)=>{
   opt.sourceCode = source.code;
   let dist = buildTool.createDistObj(opt);
   return buildTool.writeDist(dist);
})
.then((obj) => {
    console.log(obj);
})
.catch((e) => {
    console.log(e);
});
*/