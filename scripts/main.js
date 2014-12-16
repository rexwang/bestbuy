require.config({
  // By default load any module IDs from scripts/lib
  baseUrl: 'scripts/lib',
  //except, if the module ID starts with "app",
  //load it from the scripts/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    app: '../app'
  },

  shim: {
    'bpopup': {
      deps: ['jquery'],
      exports: 'Bpopup'
    }
  }
});

// Start the main app logic
require(['app/controllers/main', 'jquery'], function(MainController, $) {
  // initial load
  MainController.init();

  // list products based on selected category
  $('body').on('category-listed', function() {
    $('.categoriesItem').on('click', function() {
      MainController.listProductsBasedOnCategory($(this).attr('id'));
    });
  });

  $('body').on('products-listed', function() {
    $('.productsItem').on('click', function() {
      MainController.listProductDetail($(this).attr('id'));
    });
  });
});