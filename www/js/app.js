angular.module('ionicApp', ['ionic'])

        .config(function($stateProvider, $urlRouterProvider) {

$stateProvider
    .state('login', {
        url: "/login",
        templateUrl: "templates/login.html"
    })
    .state('login-white', {
        url: "/login-white",
        templateUrl: "templates/login-white.html"
    })
    .state('profile', {
        url: "/profile",
        templateUrl: "templates/profile.html",
        controller: "MainCtrl"
    })
    .state('profile-1', {
        url: "/profile-1",
        templateUrl: "templates/profile-1.html",
        controller: "MainCtrl"
    })
    .state('settings', {
        url: "/settings",
        templateUrl: "templates/settings.html"
    })
    .state('lists', {
        url: "/lists",
        templateUrl: "templates/lists.html",
        controller: "MyCtrl"
    })
    .state('tags', {
        url: "/tags",
        templateUrl: "templates/tags.html"
    })
    .state('collections', {
        url: "/collections",
        templateUrl: "templates/collections.html"
    })
    .state('community', {
        url: "/community",
        templateUrl: "templates/community.html",
        controller: "AppCtrl"
    })
    .state('chat', {
        url: "/chat",
        templateUrl: "templates/chat.html",
        controller: "MainCtrl"
    })
    .state('image-slider', {
        url: "/image-slider",
        templateUrl: "templates/image-slider.html"
    })

    $urlRouterProvider.otherwise("/login");
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

        .controller('MyCtrl', function($scope, $ionicSideMenuDelegate) {

            $scope.toggleLeft = function() {
                $ionicSideMenuDelegate.toggleLeft();
            };
            
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
                Hammer(document.querySelector("ion-header-bar")).on("release dragdown dragup swipedown swipeup", handleHammer);
                Hammer(document.querySelector("ion-footer-bar")).on("release dragdown dragup swipedown swipeup", handleHammer);
//var PrefixedEvent=function(e){return function(t,n,r){for(var i=0;i<e.length;i++){if(!e[i])n=n.toLowerCase();t.addEventListener(e[i]+n,r,false)}}}(["webkit","moz","MS","o",""]);
//                    $(page+" .fullwidth-table").ham("swipedown", handleHammer);
//                    PrefixedEvent(panel, "TransitionEnd", function(){
//                        current_pos = parseInt(panel.style.top);
//                        $(panel).removeClass("moving");
//                    });
                function handleHammer(ev) {

                    var body = document.querySelector("body");
//                        ev.gesture.preventDefault();
                    switch (ev.type) {
                        case 'dragup':
                        case 'dragdown':
                            if ((ev.gesture.direction === "down" && current_pos < 0) || (ev.gesture.direction === "up" && current_pos > -100))
                                panel.style.top = current_pos + Math.ceil(ev.gesture.deltaY / panel.offsetHeight * 100) + "%";
                            body.style.overflow = "hidden";
                            break;
                        case 'swipedown':
                            console.log("Swipedown");
                            console.log(current_pos);
                            ev.gesture.stopDetect();
                            panel.className += " moving";
                            panel.style.top = 0 + "%";
                            current_pos = 0;
                            body.style.overflow = "hidden";
                            break;
                        case 'swipeup':
                            ev.gesture.stopDetect();
                            panel.className += " moving";
                            panel.style.top = -100 + "%";
                            current_pos = -100;
                            body.style.overflow = "visible";
                            break;
                        case 'release':
                            panel.className += " moving";
                            current_pos = current_pos + Math.ceil(ev.gesture.deltaY / panel.offsetHeight * 100);
                            if (current_pos <= -50) {
                                panel.style.top = -100 + "%";
                                current_pos = -100;
                            } else {
                                panel.style.top = 0 + "%";
                                current_pos = 0;
                            }
                            break;
                    }
                }
            }
        });