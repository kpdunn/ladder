ladder.model = (function () {
  'use strict';
   
    var get_user, get_is_anon, login, logout;

	var stateMap = {
		user : "anon"
	};
	
    get_user = function () { 
    	return stateMap.user; 
    };

    get_is_anon = function() {
    	stateMap.user == "anon";
    };
    	
    login = function(name) {    
    	stateMap.user = name;
    };

    logout = function (user) {

      stateMap.user = stateMap.anon_user;
      
      $.event.trigger( 'ladder-logout', [ user ] );
    };

    return {
      get_user   : get_user,
      get_is_anon : get_is_anon,
      login      : login,
      logout     : logout
    };
  
}());

