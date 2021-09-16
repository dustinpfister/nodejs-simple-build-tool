# nodejs-simple-build-tool todo list

## () - 0.0.0 - first release
* (done) readme file and todo list
* (done) figure out what to use to minify javaScript code
* (done) start a build-tool.js file that will export an api
* (done) the index.js file will be what is called from CLI to use build-tool.js
* (done) start out with just a buildTool.createDistObj public method that is what will be called to create a dist object
* (done) start a demo folder with some dummy source code files, and a build-conf.json file

* start a buildTool.createSource method that will create a sourceCode string that will then be used with createDistObj
* have a buildTool.readConf method that will read a buld-conf.json file to produce an options object to use with buildTool.createSource

* have a buildTool.writeDist method that will write a dist object to the target location