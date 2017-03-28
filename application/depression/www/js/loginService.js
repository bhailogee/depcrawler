/**
 * Created by mwaseem on 3/28/2017.
 */

angular.module('login',['store'])
    .service('FBService',['FBStore',function(FBStore) {
        this.login = function (callback,error) {
            this.checkLoginState(function() {
                FB.login(function (response) {
                    if (response.status === 'connected') {
                        // Logged into your app and Facebook.
                        FBStore.authResponse = response.authResponse;
                        callback(response);
                    } else {
                        error('unable to login');
                    }
                }, {scope: 'public_profile,email'});
            });
        };
        this.checkLoginState = function (statusChangeCallback) {
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        };
        this.logout=function(){
            FB.logout(function(response) {
                // Person is now logged out
            });
        }
    }]);