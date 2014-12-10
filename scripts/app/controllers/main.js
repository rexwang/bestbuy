define([
  'jquery',
  'underscore',
  'app/models/category'
], function($, _, Category) {
  // do something here

  return {
    init: function() {
      // load data
      Category.getCategories().done(function(data) {
        console.log(data);
      });
    }
  };
});