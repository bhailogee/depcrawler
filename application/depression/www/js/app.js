// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)


        // Set AdMobAds options:
        /*admob.setOptions({
            publisherId: "pub-9472962611766334",  // Required
            interstitialAdId: "ca-app-pub-9472962611766334/7348189603",  // Optional
            tappxIdiOS: "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
            tappxIdAndroid: "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
            tappxShare: 0.5                                        // Optional
        });*/

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider,$locationProvider,myStateConfigProvider,$ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(10);
    $ionicConfigProvider.views.forwardCache(true);
    $ionicConfigProvider.scrolling.jsScrolling(false);
    $ionicConfigProvider.tabs.style("striped");
    $ionicConfigProvider.tabs.position("bottom");

   $stateProvider

    .state('app', {
    url: '/symptom',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });

    var myStates = myStateConfigProvider.$get().myStates;

    for(var i=0;i<myStates.length;i++)
    {
        $stateProvider.state(myStates[i].name,myStates[i]);
    }

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true,
            rewriteLinks: true
        });
    }
    else {
        $locationProvider.html5Mode(false);
    }

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/symptom/depression-1');
});
