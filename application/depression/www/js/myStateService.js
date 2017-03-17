/**
 * Created by mwaseem on 3/13/2017.
 */
angular.module('starter')
    .service('myStateConfig',['templates',function(templates) {


        this.myStates = [
            {
                "url": "/depression-1",
                "name": "app.depression-1"

            }, {
                "url": "/depression-10",
                "name": "app.depression-10"
            }, {
                "url": "/depression-11",
                "name": "app.depression-11"
            }, {
                "url": "/depression-12",
                "name": "app.depression-12"
            }, {
                "url": "/depression-13",
                "name": "app.depression-13"
            }, {
                "url": "/depression-14",
                "name": "app.depression-14"
            }, {
                "url": "/depression-15",
                "name": "app.depression-15"
            }, {
                "url": "/depression-16",
                "name": "app.depression-16"
            }, {
                "url": "/depression-17",
                "name": "app.depression-17"
            }, {
                "url": "/depression-18",
                "name": "app.depression-18"
            }, {
                "url": "/depression-19",
                "name": "app.depression-19"
            }, {
                "url": "/depression-2",
                "name": "app.depression-2"
            }, {
                "url": "/depression-20",
                "name": "app.depression-20"
            }, {
                "url": "/depression-21",
                "name": "app.depression-21"
            }, {
                "url": "/depression-22",
                "name": "app.depression-22"
            }, {
                "url": "/depression-23",
                "name": "app.depression-23"
            }, {
                "url": "/depression-24",
                "name": "app.depression-24"
            }, {
                "url": "/depression-25",
                "name": "app.depression-25"
            }, {
                "url": "/depression-26",
                "name": "app.depression-26"
            }, {
                "url": "/depression-27",
                "name": "app.depression-27"
            }, {
                "url": "/depression-3",
                "name": "app.depression-3"
            }, {
                "url": "/depression-4",
                "name": "app.depression-4"
            }, {
                "url": "/depression-5",
                "name": "app.depression-5"
            }, {
                "url": "/depression-6",
                "name": "app.depression-6"
            }, {
                "url": "/depression-7",
                "name": "app.depression-7"
            }, {
                "url": "/depression-8",
                "name": "app.depression-8"
            }, {
                "url": "/depression-9",
                "name": "app.depression-9"
            }];


        this.myStates.forEach(function (s) {
            s.views=s.views||{};
            s.views.menuContent=s.views.menuContent||{};

            s.views.menuContent.templateProvider = function () {

                var template=templates[s.name.split('.')[1]];

                return '<ion-view view-title="Playlist">' +
                '<ion-content>' +
                '<div class="card"><div class="item item-text-wrap">' +template+
                '</div></div>' +
                '</ion-content>' +
                '</ion-view>';


            }
        })
    }]);
