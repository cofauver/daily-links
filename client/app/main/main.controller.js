'use strict';

angular.module('dailyLinksApp').controller('MainCtrl', function ($scope, $http, socket, DateService) {
  $scope.linkList = [];
  $scope.todaysDate = DateService.getTodaysDateString();
  $http.get('/api/links').success(function (links) {
    // $scope.linkList = links;
    $scope.linkList = organizeByDate(links);
    $scope.todaysLinks = $scope.linkList[$scope.todaysDate];
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