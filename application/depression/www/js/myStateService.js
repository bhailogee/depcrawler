/**
 * Created by mwaseem on 3/13/2017.
 */
angular.module('starter')
    .service('myStateConfig',['templates',function(templates) {
      this.myStates=[];
      for(var i=0;i<43;i++)
      {
        this.myStates.push({
          "url": "/depression-"+i,
          "name": "app.depression-"+i
        });
      }
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