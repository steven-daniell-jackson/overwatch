angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
     redirectTo: '/home'
  })
  .when('/home', {
    templateUrl: 'app/views/home.html',
    controller: 'mainCtrl',
  })
//   Hero Routes
  .when('/tracer', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/bastion', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/reinhardt', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/mei', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/mercy', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/symmetra', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/junkrat', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/roadhog', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/zenyatta', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/mccree', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/genji', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/hanzo', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/pharah', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/dva', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/soldier', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/widowmaker', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/torbjorn', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/winston', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  .when('/reaper', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
    .when('/zarya', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
    .when('/lucio', {
    templateUrl: 'app/views/hero.html',
    controller: 'mainCtrl',
  })
  
  .when('/new-video', {
    templateUrl: 'app/views/new-video.html',
    controller: 'newVideo',
  })
  
  .otherwise({
        redirectTo: '/home'
   });

 
});
