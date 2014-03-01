var fs = require('fs');
var path = require('path');
var less = require('less');

var Utils = require('./utils');

function Less(file) {
  
  this.file = file;
}


Less.prototype = {
  
  //--------------------------------------------------------------
  compile: function(cb) {
    
    var file_dir = path.dirname(this.file);

    // Less parser
    var parser = new(less.Parser)({
      paths: [file_dir, '.', './']
    });
    
    // Read file contents
    var contents = fs.readFileSync(this.file, 'utf8');
    
    // Parse
    parser.parse(contents, function (err, tree) {
      
      if(err) {
        cb(err);
        return;
      }
      cb(null, tree.toCSS({compress: true}));
    });

  }
  
  //--------------------------------------------------------------
  ,getRules: function(cb) {
    
    var file_dir = path.dirname(this.file);

    // Less parser
    var parser = new(less.Parser)({
      paths: [file_dir, '.', './']
    });
    
    // Read file contents
    var contents = fs.readFileSync(this.file, 'utf8');
    
    // Parse
    parser.parse(contents, function (err, tree) {
      
      if(err) {
        cb(err);
        return;
      }
      
      var files = [];
      tree.rules.forEach(function(rule) {
        if(rule.importedFilename) {
          files.push(rule.importedFilename);
        }
      });
      
      cb(files);
    });
    
  }
};

module.exports = Less;