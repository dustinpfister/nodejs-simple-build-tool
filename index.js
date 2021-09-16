const path = require('path'),
buildTool = require( path.join(__dirname, 'lib/build-tool.js') );


let opt = {
    dir_root: path.join(__dirname, 'demo'),
    dir_target: 'dist',
    sourceFiles: [
     "./src/file1.js", "./src/file2.js", "./src/file3.js"
    ]
};

// create source
buildTool.createSource(opt)
// what to do with source object
.then((source)=>{
   opt.sourceCode = source.code;
   console.log(buildTool.createDistObj(opt) )
});


/*
let distObj = buildTool.createDistObj({
    sourceCode : 'var n = 15;   \n\n\n var z = 5;'
});

console.log( distObj );
*/
