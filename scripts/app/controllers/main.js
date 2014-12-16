define([
  'jquery',
  'bpopup',
  'underscore',
  'app/models/category',
  'app/models/product',
  'app/helper/constants'
], function($, Bpopup, _, Category, Product, Constants) {

  var categoryList = _.template('<li id="<%= categoryID %>" class="categoriesItem"><%= categoryName %></li>');
  var productsTable = _.template('<li id="<%= productID %>" class="productsItem"><img src="<%= thumbnailImage %>"><p><%= productName %></p><hr></li>');

  return {
    init: function() {

      // load data
      Category.getCategories().done(function(data) {
        _.each(data.subCategories, function(category, key, list) {
          $('#category-list').append(categoryList({
            categoryID: category.id,
            categoryName: category.name
          }));
        });

        // when categories are listed, fire an event that we can listen to
        $('body').trigger('category-listed');
      });

      Product.getProducts().done(function(data) {
        _.each(data.products, function(product) {
          $('#products-table').append(productsTable({
            productID: product.sku,
            productName: product.name,
            thumbnailImage: Constants.BestbuyCA + product.thumbnailImage
          }));
        });

        // when products are listed, fire an event that we can listen to
        $('body').trigger('products-listed');
      });
    },

    listProductsBasedOnCategory: function(categoryID) {
      Product.getProductsBasedOnCategory(categoryID).done(function(data) {

        $('#products-table').empty();

        _.each(data.products, function(product) {
          $('#products-table').append(productsTable({
            productID: product.sku,
            productName: product.name,
            thumbnailImage: Constants.BestbuyCA + product.thumbnailImage
          }));
        });
      });
    },

    listProductDetail: function(productID) {
      Product.getProductDetail(productID).done(function(details) {

        $('#product-detail').html(function() {
          var html = '<p><img src="' + Constants.BestbuyCA + details.thumbnailImage + '"></p>';
          html += '<p><a href="' + details.productUrl + '" target="_blank">' + details.name + '</a></p>';
          html += '<p>Regular Price: ' + details.regularPrice + '</p>';
          html += '<p>Sale Price: ' + details.salePrice + '</p>';
          html += '<p>Current Region: ' + details.currentRegion + '</p>';
          html += '<p>Customer Rating: ' + details.customerRating + '</p>';
          html += '<p>Customer Rating Count: ' + details.customerRatingCount + '</p>';
          html += '<p>Customer Review Count: ' + details.customerReviewCount + '</p>';
          html += '<p>Manufacture: ' + details.manufacturer + '</p>';

          return html;
        });

        // using a jquery plugin to make popup window
        $('#popup').bPopup();
      });
    }
  };
});