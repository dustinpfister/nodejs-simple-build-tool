const path = require('path'),

buildTool = require( path.join(__dirname, 'build-tool.js') );

let distObj = buildTool.createDist();

console.log( distObj );
