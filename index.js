const path = require('path'),
buildTool = require( path.join(__dirname, 'lib/build-tool.js') );
// the uri of the file
let uri_build_conf = process.argv[2] ||  path.join(process.cwd(), 'build-conf.json');
// build
buildTool.build(uri_build_conf)
.then((dist) => {
    console.log('dist folder created : ');
    console.log('path: ' + dist.dir_target);
})
.catch((e) => {
    console.log(e);
});

/*
// the options object
let opt = {};
// start by reading the json file
buildTool.readConf(uri_build_conf)
// append build-conf.json values to opt and create source
.then((conf)=>{
   opt = Object.assign(opt, conf);
   return buildTool.createSource(opt);
})
// append opt.sourceCode and create dist options by calling createDist
// then write dist
.then((source)=>{
   opt.sourceCode = source.code;
   let dist = buildTool.createDistObj(opt);
   return buildTool.writeDist(dist);
})
.then((dist) => {
    console.log('dist folder created : ');
    console.log('path: ' + dist.dir_target);
})
.catch((e) => {
    console.log(e);
});
*/