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
