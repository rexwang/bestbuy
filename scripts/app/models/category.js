define([
  'jquery',
  'underscore',
  'app/helper/constants'
], function($, _, Constants) {
  
  var categories = [];
  $.support.cors = true;

  return {
    categories: categories,
    getCategories: function() {
      var promise = $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: Constants.CategoriesURI
      });
      return promise;
    }
  };
});