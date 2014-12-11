define([
  'jquery',
  'underscore',
  'app/models/category',
  'app/templates/category-list'
], function($, _, Category, CategoryListView) {
  // do something here

  return {
    init: function() {

      var compiled = _.template('<li><%= categoryName %></li>');

      // load data
      Category.getCategories().done(function(data) {
        _.each(data.subCategories, function(category, key, list) {
          console.log(category.name);
          console.log(CategoryListView);
        });
      });

      // var compiled = _.template('<li><%= name %></li>');
      // $('#category-list').html(compiled({name: 'moe'}));
    }
  };
});