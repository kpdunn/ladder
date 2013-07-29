ladder.model = (function () {
  'use strict';
   
   var user = (function () {
    
    var get_user, login, logout;

    get_user = function () { return stateMap.user; };

    login = function(name) {
    
    	stateMap.user = name;
    };

    logout = function () {

      stateMap.user = stateMap.anon_user;
      
      $.event.trigger( 'ladder-logout', [ user ] );
    };

    return {
      get_user   : get_user,
      login      : login,
      logout     : logout
    };
  }());


  return { user : user };
  
}());

