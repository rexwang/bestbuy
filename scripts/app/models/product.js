define([
  'jquery',
  'app/helper/constants'
], function($, Constants) {

  function getData(url) {
    var promise = $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: url
    });
    return promise;
  }
  
  return {
    getProducts: function() {
      return getData(Constants.ProductsURI);
    },

    getProductsBasedOnCategory: function(categoryID) {
      return getData(Constants.ProductListForCategory + categoryID);
    },

    getProductDetail: function(productID) {
      return getData(Constants.ProductDetailURI + productID);
    }
  };
});