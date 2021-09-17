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
