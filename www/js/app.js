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
          templateUrl: "templates/profile.html",
          controller: "MainCtrl"
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
    .state('eventmenu.tags', {
      url: "/tags",
      views: {
        'menuContent' :{
          templateUrl: "templates/tags.html"
        }
      }
    })
    .state('eventmenu.collections', {
      url: "/collections",
      views: {
        'menuContent' :{
          templateUrl: "templates/collections.html"
        }
      }
    })
    .state('eventmenu.community', {
      url: "/community",
      views: {
        'menuContent' :{
          templateUrl: "templates/community.html",
          controller: "AppCtrl"
        }
      }
    })
    .state('eventmenu.chat', {
      url: "/chat",
      views: {
        'menuContent' :{
          templateUrl: "templates/chat.html"
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

.controller('AppCtrl', function($scope, $ionicModal) {
  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' },
  ];
  $ionicModal.fromTemplateUrl('templates/modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up',
    focusFirstInput: true
  });
})

.controller('ModalCtrl', function($scope) {
  $scope.newUser = {}; 
  $scope.createContact = function() {
    console.log('Create Contact', $scope.newUser);
    $scope.modal.hide();
  };
  
});

