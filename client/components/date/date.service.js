
'use strict';

angular.module('dailyLinksApp')
  .service('DateService', function() {
  	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return{
    	getTodaysDateString: function(){
    		var today = new Date(Date.now());
    		return days[today.getDay()] + ' ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
    	}

    }
    




  });