/**
 * Created by mwaseem on 3/13/2017.
 */
angular.module('starter')
    .service('myStateConfig',function() {



        this.myStates = [
            {
                "url": "/depression-1",
                "name": "app.depression-1",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-1.html"}}
            }, {
                "url": "/depression-10",
                "name": "app.depression-10",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-10.html"}}
            }, {
                "url": "/depression-11",
                "name": "app.depression-11",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-11.html"}}
            }, {
                "url": "/depression-12",
                "name": "app.depression-12",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-12.html"}}
            }, {
                "url": "/depression-13",
                "name": "app.depression-13",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-13.html"}}
            }, {
                "url": "/depression-14",
                "name": "app.depression-14",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-14.html"}}
            }, {
                "url": "/depression-15",
                "name": "app.depression-15",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-15.html"}}
            }, {
                "url": "/depression-16",
                "name": "app.depression-16",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-16.html"}}
            }, {
                "url": "/depression-17",
                "name": "app.depression-17",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-17.html"}}
            }, {
                "url": "/depression-18",
                "name": "app.depression-18",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-18.html"}}
            }, {
                "url": "/depression-19",
                "name": "app.depression-19",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-19.html"}}
            }, {
                "url": "/depression-2",
                "name": "app.depression-2",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-2.html"}}
            }, {
                "url": "/depression-20",
                "name": "app.depression-20",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-20.html"}}
            }, {
                "url": "/depression-21",
                "name": "app.depression-21",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-21.html"}}
            }, {
                "url": "/depression-22",
                "name": "app.depression-22",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-22.html"}}
            }, {
                "url": "/depression-23",
                "name": "app.depression-23",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-23.html"}}
            }, {
                "url": "/depression-24",
                "name": "app.depression-24",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-24.html"}}
            }, {
                "url": "/depression-25",
                "name": "app.depression-25",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-25.html"}}
            }, {
                "url": "/depression-26",
                "name": "app.depression-26",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-26.html"}}
            }, {
                "url": "/depression-27",
                "name": "app.depression-27",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-27.html"}}
            }, {
                "url": "/depression-3",
                "name": "app.depression-3",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-3.html"}}
            }, {
                "url": "/depression-4",
                "name": "app.depression-4",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-4.html"}}
            }, {
                "url": "/depression-5",
                "name": "app.depression-5",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-5.html"}}
            }, {
                "url": "/depression-6",
                "name": "app.depression-6",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-6.html"}}
            }, {
                "url": "/depression-7",
                "name": "app.depression-7",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-7.html"}}
            }, {
                "url": "/depression-8",
                "name": "app.depression-8",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-8.html"}}
            }, {
                "url": "/depression-9",
                "name": "app.depression-9",
                "views": {"menuContent": {"templateUrl": "data/man/depression/depression-9.html"}}
            }];


        this.myStates.forEach(function(s){
            s.controller =function(){

            };
            s.link=function(scope,elem,attr){
                iView = angular.element('<ion-view>');
                iView.html(elem);
            }
        })
    });
