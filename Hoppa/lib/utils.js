// Node
var fs = require('fs');
var npath = require('path');

function Utils() {

}

Utils.prototype = {
  
  //--------------------------------------------------------------
  getDirFiles: function(path, ext) {

    var results = [];
    var list = fs.readdirSync(path);
    var _this = this;
    
    list.forEach(function(file) {
      
      file = path + file;
      var stat = fs.statSync(file)
      
      /*if(stat && stat.isDirectory()) {
        results = results.concat(_this.getDirFiles(file));
        return;
      }*/
      
      if(npath.extname(file) == ext) {
        results.push(file);
      }
    })
    
    return results;  
  }
  
  //--------------------------------------------------------------
  ,getDirPath: function(path) {
    
    if(path.indexOf('*.') > 0) {
      return npath.dirname(path) + '/'; 
    }
    
    return false;
  }
  
  //--------------------------------------------------------------
  ,getDirExt: function(path) {
    
    return npath.extname(path);  
  }
  
};

module.exports = new Utils();