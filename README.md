# nodejs-simple-build-tool

My take on a simple nodejs build tool. I do not care to make something that is packed with features for this one, I just want a basic tool that will work, and move on with things. 

The basic process of this should still  be as follows.

* have a build-config.json file that will hold settings for the built process
* build-config.json should have a dir_root prop to set what the root path is relative to the built script
* build-config.json should have a dir_target prop that is the output folder relative to dir_root
* build-config.json should have a list of paths relative to dir_root to development source files
* build-config.json should have a string that will be some comments to place at the top of the output file
* build-config.json should have a fileName prop that is the fileName to use for the output files
* write a development output javaScript file to an output location such as /dist/\[Project.name\].js
* minify the development output, and write it to a location like /dist/\[Project.name\]min.js

## 