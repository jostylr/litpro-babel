:project.md
### heading

This is a file that will generate a simple.js

    console.log( [" a", "b", " c "].map( s => s.trim() ));

[simple.js](# "save:| js-babel")
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
