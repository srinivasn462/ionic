angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "event-menu.html"
    })
    .state('eventmenu.login', {
      url: "/login",
      views: {
        'menuContent' :{
          templateUrl: "templates/login.html"
        }
      }
    })
    .state('eventmenu.login-white', {
      url: "/login-white",
      views: {
        'menuContent' :{
          templateUrl: "templates/login-white.html"
        }
      }
    })
    .state('eventmenu.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html"
        }
      }
    })
    .state('eventmenu.profile-1', {
      url: "/profile-1",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile-1.html"
        }
      }
    })
    .state('eventmenu.settings', {
      url: "/settings",
      views: {
        'menuContent' :{
          templateUrl: "templates/settings.html"
        }
      }
    })
    .state('eventmenu.lists', {
      url: "/lists",
      views: {
        'menuContent' :{
          templateUrl: "templates/lists.html"
        }
      }
    })
  
  $urlRouterProvider.otherwise("/event/profile");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

