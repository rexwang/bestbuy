requirejs.config({
  // By default load any module IDs from scripts/lib
  baseUrl: 'scripts/lib',
  //except, if the module ID starts with "app",
  //load it from the scripts/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  path: {
    app: '../app'
  }
});