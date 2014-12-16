define([
  'jquery',
  'app/helper/constants'
], function($, Constants) {
  
  return {
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