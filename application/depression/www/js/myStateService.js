/**
 * Created by mwaseem on 3/13/2017.
 */
angular.module('starter')
    .service('myStateConfig',['templates',function(templates) {


      this.myStates=[];
      this.statesDef=[
          {name:"depression",count:43,view:"menuContent"},
          {name:"anxiety",count:37,view:"menuContent3"}
      ];


      for(var jj=0;jj<this.statesDef.length;jj++)
      {
          var stateDef = this.statesDef[jj];
          for(var i=0;i<stateDef.count;i++) {

              var s =
              {
                  "url": "/" + stateDef.name + "-" + i,
                  "name": "app." + stateDef.name + "-" + i
              };

              s.views=s.views||{};
              s.views[stateDef['view']]=s.views[stateDef['view']]||{};

              s.views[stateDef['view']].templateProvider = function () {

                  var template=templates[s.name.split('.')[1]];

                  return '<ion-view view-title="Playlist">' +
                      '<ion-content>' +
                      '<div class="card"><div class="item item-text-wrap">' +template+
                      '</div></div>' +
                      '</ion-content>' +
                      '</ion-view>';
              }
              this.myStates.push(s);
          }
      }



    }]);