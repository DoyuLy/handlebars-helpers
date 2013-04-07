(function() {
  var Handlebars, Utils;

  Handlebars = require('./helpers').Handlebars;

  Utils = require('../utils/utils');

  Handlebars.registerHelper('log', function(value) {
    return console.log(value);
  });

  Handlebars.registerHelper('debug', function(value) {
    console.log('Context: ', this);
    if (!Utils.isUndefined(value)) {
      console.log('Value: ', value);
    }
    return console.log('-----------------------------------------------');
  });

}).call(this);