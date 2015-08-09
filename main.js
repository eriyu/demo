(function(){
  console.log("app load main");
  var app = angular.module("app",["ngCookies"]);

  app.run([
    '$rootScope',
    'version'
    ,function($rootScope,version) {
      $rootScope.version = version;
      console.log("app run");
    }
  ]);

})();
// app.config([
//   '$controllerProvider',
//   '$cookiesProvider',
//   function($controllerProvider,$cookiesProvider) {
//     $controllerProvider.allowGlobals();
//     $cookiesProvider.defaults.path = '/';
//     console.log("controllerProvider set ok");
//   }
// ]);

// app.run(['$rootScope','version',function($rootScope,version) {
//   $rootScope.version = version;
//   console.log("run set ok");
// }]);