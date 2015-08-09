(function(){
  console.log("app load main");
  var app = angular.module("app",["ngCookies"]);

  app.config(['ItemProvider', function (ItemProvider) {
    //Use Funciton Change Provider 
    ItemProvider.changeName("Lala");
    //Use Property Change Provider
    ItemProvider.defaults.name = "Morris";
  }]);

  app.run([
    '$rootScope',
    'version'
    ,function($rootScope,version) {
      $rootScope.version = version = "0.1.0";
      console.log("app run");
    }
  ]);


  //$injector.get就是使用$provider的$get取得服務的實體
  app.provider('Item', [function () {
    // === Provider Config Area Start ===
    var defaults = this.defaults = {};
    //vm.myname = "Will";
    
    this.changeName = function(_name){
      this.defaults.name = _name;
    };
    // === Provider Config Area End ===

    // === Provider GetInstance Area Start ===
    this.$get = [function() {
      return {
        "name":this.defaults.name
      };
    }];
    // === Provider GetInstance Area End ===
  }]);

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