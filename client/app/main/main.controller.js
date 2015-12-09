'use strict';

angular.module('dailyLinksApp').controller('MainCtrl', function ($scope, $http, socket) {
  $scope.linkList = [];

  $http.get('/api/links').success(function (links) {
    // $scope.linkList = links;
    $scope.linkList = organizeByDate(links);
  });;

  var organizeByDate = function(list){
    var dateOrganizedList = {};
    angular.forEach(list, function(linkObject){
      if(dateOrganizedList[linkObject.date]){
        dateOrganizedList[linkObject.date].push(linkObject);
      }else{
        dateOrganizedList[linkObject.date] = [linkObject];
      }
    });
    return dateOrganizedList;
  };

});
//# sourceMappingURL=main.controller.js.map