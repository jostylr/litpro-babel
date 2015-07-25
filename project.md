# [litpro-babel](# "version: 0.1.0 ; babel for litpro")

This implements running babel from the literate programming. The command is
`js-babel`

If litpro is installed, run `litpro -b . project.md; npm install` initially.
After that, one can just run `litpro` and the lprc.js file will do what needs
to be done. 

This is designed to work with the 1.0 version of [literate-programming](https://github.com/jostylr/literate-programming).


## Directory structure

* [index.js](#index "save: |jshint") This is the file that is the module.
* [README.md](#readme "save: ") The standard README.
* [lprc.js](#lprc "save: ") How to compile this file with litpro.
* [package.json](#npm-package "save: ") The requisite package file for a npm project. 
* [TODO.md](#todo "save: | raw ## Todo, ---") A list of growing and shrinking items todo.
* [LICENSE](#license "save:") The MIT license
* [.npmignore](#npmignore "save: ")
* [.gitignore](#gitignore "save: ")
* [.travis.yml](#travis "save: ")
* [test.js](#test-function "save: |jshint") 


## Index

This is the module entry point.

    var merge = require('merge');
    var babel = require('babel-core');

    module.exports = function (Folder, args) {

        var options = Folder.plugins.babel =  {
        };
        
        Folder.sync("js-babel", function (code, args) {
            var doc = this; 

            options = merge(true, doc.plugins.babel, args[0]);
            var result = babel.transform(code, options);  
            return result.code;
        });

    };

    
## lprc

This creates the lprc file for the plugin. Basically, it just says to run
project.md as the file of choice and to build it in the top directory.


    module.exports = function(Folder, args) {
    
        require('litpro-jshint')(Folder);

        if (args.file.length === 0) {
            args.file = ["project.md"];
        }
        args.build = ".";
        args.src = ".";


    };

## Test Function

    /*global require */

    var tests = require('literate-programming-cli-test')();//true, "hiddenConsole");

    tests( 
        ["*first"]
    );

## Readme

This is the readme for the plugin.  

    # Litpro-babel  [![Build Status](https://travis-ci.org/jostylr/litpro-babel.png)](https://travis-ci.org/jostylr/litpro-babel)


    This implements running [babel](http://babeljs.io) from the literate
    programming. The command is `js-babel`. It takes in ES6 code and outputs
    ES5 code as best as can be done.  

    This is a plugin for [literate-programming](https://github.com/jostylr/literate-programming). 
    
    Install `npm install litpro-babel` and then you can use this by requiring it in the lprc.js file.


    ## Example lprc.js

        module.exports = function (Folder) {
            require("litpro-babel")(Folder);
        }

    ## Example project.md

    _":sample"


[sample]() 

    ### heading

    This is a file that will generate a simple.js

        console.log( [" a", "b", " c "].map( s => s.trim() ));

    [simple.js](# "save:| js-babel")



## Tests


    :project.md
    _"readme:sample"
    [just to eval|](# ":| js-babel | eval e("console.log('hi')")")
    ---:lprc.js
    module.exports = function (Folder) {
        require("../../index.js")(Folder);
    }

    ---=build/simple.js
    "use strict";

    console.log([" a", "b", " c "].map(function (s) {
      return s.trim();
    }));
    



[tests/first.md](# "save:") 



## npm package

This should setup the npm file 


    {
      "name": "_`g::docname`",
      "description": "_`g::tagline`",
      "version": "_`g::docversion`",
      "homepage": "https://github.com/_`g::gituser`/_`g::docname`",
      "author": {
        "name": "_`g::authorname`",
        "email": "_`g::authoremail`"
      },
      "repository": {
        "type": "git",
        "url": "git://github.com/_`g::gituser`/_`g::docname`.git"
      },
      "bugs": {
        "url": "https://github.com/_`g::gituser`/_`g::docname`/issues"
      },
      "license": "MIT",
      "main": "index.js",
      "engines": {
        "node": ">=0.10"
      },
      "dependencies":{
        _"g::npm dependencies"
      },
      "devDependencies" : {
        _"g::npm dev dependencies"
      },
      "scripts" : { 
        "test" : "node ./test.js"
      },
      "keywords": ["litpro plugin", "babel"]
    }

## gitignore

Stuff not to include in git. Don't check in your modules.

The tests is excluded with the presumption of cli-test's format of `.md` files
that populate into test directories. We check in the files, but not the test
directories. 

    node_modules
    .checksum
    /tests/*/

    

## npmignore

npm does not need to see your tests or your litpro code. Submit the js stuff!
Despite the `*.md`, your readme file will be seen. 

    tests
    test.js
    travis.yml
    ghpages
    node_modules
    *.md
    

## Travis

You write tests, right? 


    language: node_js
    node_js:
      - "0.10"
      - "iojs"
      - "0.12"
    

[off](# "block:")

## Todo


---
[on](# "block:")

## License

    The MIT License (MIT)
    Copyright (c) _"g::year" _"g::authorname"

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.



[James Taylor](https://github.com/jostylr "npminfo: jostylr@gmail.com ; 
    deps: babel-core 5.8.5, merge 1.2.0; 
    dev: litpro 0.9.3, litpro-jshint 0.2.1,
    literate-programming-cli-test 0.5.1 ")
