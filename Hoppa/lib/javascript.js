// Uglify
var jsp = require('uglify-js').parser;
var pro = require('uglify-js').uglify;

// Beautify
var beautifier = require('js-beautify').js_beautify;

// Node
var fs = require('fs');

/* Javascript file type class */
function Javascript(file) {
  
  this.file = file;
}

Javascript.prototype = { 
  
  //--------------------------------------------------------------
  compress: function() {
  
    var contents = this.getContents();
    
    // Parse js
    var ast = jsp.parse(contents);
    
    // Compress js
    ast = pro.ast_mangle(ast);
    ast = pro.ast_squeeze(ast);
    
    // Compression result
    var js = pro.gen_code(ast);
    
    return js;
  }
  
  //--------------------------------------------------------------
  ,getContents: function() {
  
    // Read file contents
    var contents = fs.readFileSync(this.file, 'utf8');
    
    return contents;
  }
  
  //--------------------------------------------------------------
  ,beautify: function() {
    
    // Read file contents
    var contents = fs.readFileSync(this.file, 'utf8');
    
    // Beautify js
    var js = beautifier(contents, { indent_size: 2 });
    
    return js;
  }
  
};

module.exports = Javascript;