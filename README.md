# nodejs-simple-build-tool

This is my take on a simple nodejs build tool for the sake of createing a dist folder from a collection of source code files. I do not care to make something that is packed with features for this one, I just want a basic tool that will work, and move on with things. 

Event when it comes to keeping this basic the process of this should still be as follows.

* have a build-config.json file that will hold settings for the build process
* build-config.json should have a dir\_root prop to set what the root path is relative to the build-conf.json file
* build-config.json should have a dir\_target prop that is the output folder relative to dir_root
* build-config.json should have a sourceFiles prop that is a list of paths relative to dir_root to soucre code files
* build-config.json should have a fileName prop that is the fileName to use for the output files
* if a package.json file is found a version, license, and author prop will be used in place of build-config settings for these values
* write a development output javaScript file to an output location such as /dist/\[Project.name\].js
* minify the development output, and write it to a location like /dist/\[Project.name\]min.js

## Going with uglify to Minify JavaScript code

I decided to [go with uglify](https://www.npmjs.com/package/uglify-js) for this. I have not done a great deal of testing with the dependency however it does produce a desired output for what I want this kind of dependency for.

This development input:

```js
var gameMod = (function () {
    // public API
    var api = {};
    // a private method
    var add = function (a, b) {
        return a + b;
    };
    // a pubic API method
    api.func1 = function (a, b) {
        return a + b;
    }
    // return the public api
    return api;
}
    ())

```

results in this output after running it threw uglify:

```js
var gameMod=function(){var n={};return n.func1=function(n,r){return n+r},n}();
```