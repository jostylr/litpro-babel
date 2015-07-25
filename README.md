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

### heading

This is a file that will generate a simple.js

    console.log( [" a", "b", " c "].map( s => s.trim() ));

[simple.js](# "save:| js-babel")
