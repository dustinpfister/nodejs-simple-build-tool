const path = require('path'),

buildTool = require( path.join(__dirname, 'lib/build-tool.js') );

let distObj = buildTool.createDistObj({
    sourceCode : 'var n = 15;   \n\n\n var z = 5;'
});

console.log( distObj );
