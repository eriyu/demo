# demo

## 01 建立 ng-app 應用程式，並自訂 angular.module 模組

## 02 在建立好的 app 模組套用 $controllerProvider.allowGlobals(); 設定

## 03 註冊一個 value 服務，命名為 version，值為 "1.0.0"，注入到 run 函式的 $rootScope 裡面，並顯示到頁面上

## 04 載入 ngCookies 模組，並透過 config 進行設定，固定 Cookie 的 path 屬性固定為 '/'
不可以使用angular1.3.15版，因為沒有$cookieProvider可以設定，要使用angular1.4版