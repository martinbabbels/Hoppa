// CLI color
var clc = require('cli-color');

// Growl
var Growl = require('growl');

function Console() {

  this.clc_error = clc.whiteBright.bgRedBright.bold;
  this.clc_warn = clc.yellow;
  this.clc_notice = clc.blue.bgWhiteBright.bold;
  this.clc_info = clc.red.bgWhiteBright.bold;
  this.clc_status = clc.yellowBright;
  this.clc_start = clc.whiteBright.bgBlackBright.bold;
  this.clc_end = clc.cyanBright;
}

Console.prototype = {
  
  //--------------------------------------------------------------
  addSpace: function(v) {
  
    return ' ' + v + ' ';
  }
  
  //--------------------------------------------------------------
  ,clear: function() {
  
    console.log('\033[2J\033[0f');
  }
  
  //--------------------------------------------------------------
  ,log: function(v) {
  
    console.log(v);
  }
  
  //--------------------------------------------------------------
  ,error: function(v) {
    
    console.error(this.clc_error(this.addSpace(v)));
    this.empty();
  }
  
  //--------------------------------------------------------------
  ,warn: function(v) {
    
    console.warn(this.clc_warn(v));
  }
  
  //--------------------------------------------------------------
  ,notice: function(v) {
    
    console.info(this.clc_notice(this.addSpace(v)));
  }
  
  //--------------------------------------------------------------
  ,status: function(v) {
    
    console.info(this.clc_status(v));
  }
  
  //--------------------------------------------------------------
  ,statusGrowl: function(v) {
    
    this.status(v);
    this.growl(v);
  }
  
  //--------------------------------------------------------------
  ,start: function(v) {
    
    console.info(this.clc_start(this.addSpace(v)));
  }
  
  //--------------------------------------------------------------
  ,end: function(v) {
    
    console.info(this.clc_end(v));
  }
  
  //--------------------------------------------------------------
  ,empty: function() {
    
    console.log('');
  }
  
  //--------------------------------------------------------------
  ,info: function(v) {
    
    console.info(this.clc_info(this.addSpace(v)));
  }
  
  //--------------------------------------------------------------
  ,growl: function(v) {
  
    Growl(v);
  }
};

module.exports = new Console();