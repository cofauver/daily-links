'use strict';

angular.module('dailyLinksApp')
  .controller('ProfileCtrl', function ($scope, $stateParams, User, Auth, ) {
    $scope.currentUser = Auth.getCurrentUser();

    var profileUserId = $stateParams.id;


    $scope.profileUser = User.get({'_id':profileUserId}, function(result){
      console.log(result);
    });

    
  });
