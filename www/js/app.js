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
          templateUrl: "templates/community.html"
//          controller: "SwipeController"
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
    .state('eventmenu.image-slider', {
      url: "/image-slider",
      views: {
        'menuContent' :{
          templateUrl: "templates/image-slider.html"
        }
      }
    })
//    .state('eventmenu.test', {
//      url: "/test",
//      views: {
//        'menuContent' :{
//          templateUrl: "templates/test.html",
//          controller: "Controller"
//        }
//      }
//    })
  
  $urlRouterProvider.otherwise("/event/profile");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('AppCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal-window.html', function(modal) {
    $scope.modal = modal;
  }, {
    animation: 'slide-in-up twitter',
    focusFirstInput: true
  });
})

.controller('ModalCtrl', function($scope) {
  $scope.newUser = {}; 
  $scope.createContact = function() {
    console.log('Create Contact', $scope.newUser);
    $scope.modal.hide();
  };
  
})

.controller('MyCtrl', function($scope) {

  
  $scope.itemButtons = [
    {
      text: '',
      type: 'button-positive check',
      onTap: function() {
        
      }
    },
    {
      text: '',
      type: 'button-positive message',
      onTap: function() {
        
      }
    },
    {
      text: '',
      type: 'button-positive close',
      onTap: function() {
        
      }
    }
  ];
  
})
    .directive('habraHabr', function() {
        return function($scope, element, attrs) {
            console.log(element)
            
           console.log("21211")
            console.log(document.querySelector("#swipe-menu"))
            
//            $scope.swipeMenu = (function(){
//                return function (page){
      
//                    var panel_drag = document.querySelector(page+' #top-menu'),
                    var panel_drag = document.querySelector("#swipe-menu-drag"),
                        panel = document.querySelector("#swipe-menu"),
                        current_pos = -100;
                        console.log(panel_drag);
                    Hammer(document.querySelector("body")).on("release dragdown dragup swipedown swipeup", handleHammer);
//var PrefixedEvent=function(e){return function(t,n,r){for(var i=0;i<e.length;i++){if(!e[i])n=n.toLowerCase();t.addEventListener(e[i]+n,r,false)}}}(["webkit","moz","MS","o",""]);
//                    $(page+" .fullwidth-table").ham("swipedown", handleHammer);
//                    PrefixedEvent(panel, "TransitionEnd", function(){
//                        current_pos = parseInt(panel.style.top);
//                        $(panel).removeClass("moving");
//                    });
                    function handleHammer(ev){

                        var body = document.querySelector("body");
//                        ev.gesture.preventDefault();
                        switch(ev.type){
                            case 'dragup':
                            case 'dragdown':
                                if((ev.gesture.direction === "down" && current_pos < 0) || (ev.gesture.direction === "up" && current_pos >-100) )
                                    panel.style.top = current_pos + Math.ceil(ev.gesture.deltaY/panel.offsetHeight * 100)+"%";
                                body.style.overflow = "hidden";
                                break;
                            case 'swipedown':
                                console.log("Swipedown");
                                console.log(current_pos);
                                ev.gesture.stopDetect();
                                panel.className+=" moving";
                                panel.style.top = 0+"%";
                                current_pos = 0;
                                body.style.overflow = "hidden";
                                break;
                            case 'swipeup':
                                ev.gesture.stopDetect();
                                panel.className+=" moving";
                                panel.style.top = -100+"%";
                                current_pos = -100;
                                body.style.overflow = "visible";
                                break;
                            case 'release':
                                panel.addClass("moving");
                                current_pos = current_pos + Math.ceil(ev.gesture.deltaY/panel.offsetHeight * 100);
                                if(current_pos<=-50){
                                    panel.style.top = -100+"%";
                                    current_pos = -100;
                                }else{
                                    panel.style.top = 0+"%";
                                    current_pos = 0;
                                }
                                break;
                        }
                    }
                
  
            
            
            
            
            /*Задаем функцию, которая будет вызываться при изменении переменной word, ее имя находится в attrs.habraHabr*/
//            $scope.$watch(attrs.habraHabr,function(value){
//                element.text(value+attrs.habra);
//            });
        }
    });

//.directive('SwipeCtrl', function($scope) {
//
//  
//  $scope.swipeMenu = (function(){
//        
//        return function (page){
//            var panel_drag = document.querySelector(page+' #top-menu'),
//                panel = document.querySelector(page+' [data-role="swipe-menu"]'),
//                current_pos = -100;
////                console.log(Hammer);
//            Hammer(panel_drag).on("release dragdown dragup swipedown swipeup", handleHammer);
//            
//            $(page+" .fullwidth-table").ham("swipedown", handleHammer);
//            PrefixedEvent(panel, "TransitionEnd", function(){
//                current_pos = parseInt(panel.style.top);
//                $(panel).removeClass("moving");
//            });
//
//            function handleHammer(ev){
//                console.log(ev)
//                var body = document.querySelector("body");
//                ev.gesture.preventDefault();
//                switch(ev.type){
//                    case 'dragup':
//                    case 'dragdown':
//                        if((ev.gesture.direction === "down" && current_pos < 0) || (ev.gesture.direction === "up" && current_pos >-100) )
//                            panel.style.top = current_pos + Math.ceil(ev.gesture.deltaY/panel.offsetHeight * 100)+"%";
//                        body.style.overflow = "hidden";
//                        break;
//                    case 'swipedown':
//                        console.log("Swipedown");
//                        console.log(current_pos);
//                        ev.gesture.stopDetect();
//                        $(panel).addClass("moving");
//                        panel.style.top = 0+"%";
//                        current_pos = 0;
//                        body.style.overflow = "hidden";
//                        break;
//                    case 'swipeup':
//                        ev.gesture.stopDetect();
//                        $(panel).addClass("moving");
//                        panel.style.top = -100+"%";
//                        current_pos = -100;
//                        body.style.overflow = "visible";
//                        break;
//                    case 'release':
//                        $(panel).addClass("moving");
//                        current_pos = current_pos + Math.ceil(ev.gesture.deltaY/panel.offsetHeight * 100);
//                        if(current_pos<=-50){
//                            panel.style.top = -100+"%";
//                            current_pos = -100;
//                        }else{
//                            panel.style.top = 0+"%";
//                            current_pos = 0;
//                            $("body").css("overflow","visible");
//                        }
//                        break;
//                }
//
//
////                function fixPaneRefresh() {
////                        var top = window.pageYOffset || document.documentElement.scrollTop;
////                        console.log(top);
////                            $('body').css("top", "-"+top+"px"); 
////                }
//
//
//                if(panel.style.bottom === "0%"){
//                      document.getElementById('notes').addEventListener('touchmove', function(e) {
//                      e.preventDefault();
//                }, false);
//                }
//                else{
//                    $("body").css({"position" : "relative", "overflow" : "visible"});
//                    console.log("2222222");
//                    console.log($("body").css("overflow"))
//                }
//            }
//        };
//        
//    }());
//  
//});
/*
.controller('SwipeController', '$scope', function($scope) {
    
    $scope.swipeMenu = function() {
       return function (){
           console.log("11111111111")
//            var panel_drag = document.querySelector(' #top-menu'),
//                panel = document.querySelector(' #swipe-menu'),
//                current_pos = -100;
////                console.log(Hammer);
//            Hammer(panel_drag).on("release dragdown dragup swipedown swipeup", handleHammer);
//            
//            $(" .fullwidth-table").ham("swipedown", handleHammer);
//            PrefixedEvent(panel, "TransitionEnd", function(){
//                current_pos = parseInt(panel.style.top);
//                $(panel).removeClass("moving");
//            });
//
//            function handleHammer(ev){
//                console.log(ev)
//                var body = document.querySelector("body");
//                ev.gesture.preventDefault();
//                switch(ev.type){
//                    case 'dragup':
//                    case 'dragdown':
//                        if((ev.gesture.direction === "down" && current_pos < 0) || (ev.gesture.direction === "up" && current_pos >-100) )
//                            panel.style.top = current_pos + Math.ceil(ev.gesture.deltaY/panel.offsetHeight * 100)+"%";
//                        body.style.overflow = "hidden";
//                        break;
//                    case 'swipedown':
//                        console.log("Swipedown");
//                        console.log(current_pos);
//                        ev.gesture.stopDetect();
//                        $(panel).addClass("moving");
//                        panel.style.top = 0+"%";
//                        current_pos = 0;
//                        body.style.overflow = "hidden";
//                        break;
//                    case 'swipeup':
//                        ev.gesture.stopDetect();
//                        $(panel).addClass("moving");
//                        panel.style.top = -100+"%";
//                        current_pos = -100;
//                        body.style.overflow = "visible";
//                        break;
//                    case 'release':
//                        $(panel).addClass("moving");
//                        current_pos = current_pos + Math.ceil(ev.gesture.deltaY/panel.offsetHeight * 100);
//                        if(current_pos<=-50){
//                            panel.style.top = -100+"%";
//                            current_pos = -100;
//                        }else{
//                            panel.style.top = 0+"%";
//                            current_pos = 0;
//                            $("body").css("overflow","visible");
//                        }
//                        break;
//                }
//
//
//                if(panel.style.bottom === "0%"){
//                      document.getElementById('notes').addEventListener('touchmove', function(e) {
//                      e.preventDefault();
//                }, false);
//                }
//                else{
//                    $("body").css({"position" : "relative", "overflow" : "visible"});
//                    console.log("2222222");
//                    console.log($("body").css("overflow"))
//                }
//            }
        };
    };
}); */
//}]);