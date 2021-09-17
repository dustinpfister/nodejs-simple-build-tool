# nodejs-simple-build-tool todo list

## (   ) - 0.x.0 - top and bottom strings
* can set a top and bottom string value in build-conf.json
* the text of these top and bottom strings will show up on the top and bottom of the output file

## (   ) - 0.2.0 - buildTool.build method
* take what was worked out in /index.js and make it into a buildTool.build method
* the buildTool.build method shoud just need a dir to a conf.json, or an object literal with the same values
* the /index.js file should use builtTool.build

## (   ) - 0.1.0 - buildTool.readConf method
* have a buildTool.readConf method that will read a buld-conf.json 
* the result of buildTool.readConf should be an options object to use with buildTool.createSource
* update /index.js to use buildTool.readConf over the hard coded object in index.js
* make it so that the one and only argument given to /index.js is a dir to a build-onf.json

## ( done 09/16/2021 ) - 0.0.0 - first release
* (done) readme file and todo list
* (done) figure out what to use to minify javaScript code
* (done) start a build-tool.js file that will export an api
* (done) the index.js file will be what is called from CLI to use build-tool.js
* (done) start out with just a buildTool.createDistObj public method that is what will be called to create a dist object
* (done) start a demo folder with some dummy source code files, and a build-conf.json file
* (done) start a buildTool.createSource method that will create a sourceCode string that will then be used with createDistObj
* (done) have a buildTool.writeDist method that will write a dist object to the target location