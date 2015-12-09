'use strict';

angular.module('dailyLinksApp')
  .controller('AdminCtrl', function ($scope, $http, socket, Auth, User /*, Link*/) {

    $http.get('/api/links').success(function (links) {
      $scope.linkList = links;
      socket.syncUpdates('link', $scope.linkList);
    });

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.allLinks /*= Link.query()*/;
    $scope.todaysLinks = [];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var today = new Date(Date.now());
    $scope.todaysDate = days[today.getDay()] + ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

    $scope.addNewLink = function(title, summary, url){
      var link = {title: title, summary: summary, url: url, date: $scope.todaysDate};
      
      $http.post('/api/links', link).success(function(result){
        console.log(result);
        link._id = result._id;
        $scope.todaysLinks.push(link);
      });
      $scope.newLink = {};
    };

    $scope.removeALink = function(link){
      var removalLoc = $scope.todaysLinks.indexOf(link);
      $http['delete']('/api/links/' + link._id);
      $scope.todaysLinks.splice(removalLoc, 1);
    };

    $scope.submitTodaysLinks = function(){

    };

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });


/*
  $http.get('/api/links').success(function (links) {
    $scope.linkList = links;
    socket.syncUpdates('link', $scope.linkList);
  });

  $scope.addLink = function () {
    if ($scope.newLink === '') {
      return;
    }
    $http.post('/api/links', { name: $scope.newLink });
    $scope.newLink = '';
  };

  $scope.deleteThing = function (link) {
    $http['delete']('/api/links/' + link._id);
  };
  
  $scope.$on('$destroy', function () {
    socket.unsyncUpdates('link');
  });

*/
