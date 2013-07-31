
ladder.login_logout = (function () {

  onTapAcct = function ( event ) {
    var acct_text, user_name, user = ladder.model.get_user();
    if ( user == "anon" ) {
      user_name = prompt( 'Please sign-in' );
      ladder.model.login( user_name );
      jqueryMap.$login_logout.text( '... processing ...' );
      jqueryMap.$login_logout.text( user_name );
    }
    else {
     ladder.model.logout();
    }
    return false;
  };

  onLogin = function ( event, login_user ) {
    jqueryMap.$login_logout.text( login_user.name );
  };

  onLogout = function ( event, logout_user ) {
    jqueryMap.$login_logout.text( 'Please sign-in' );
    ladder.model.set_user("anon");
  };

  var stateMap = {
  	$container : undefined
  };
  
  var jqueryMap = {};
  var initModule = function($container) {
    stateMap.$container = $container;
  	jqueryMap = {
    	$container 			: $container,
    	$login_logout      	: $container.find('.ladder-head-login')
    };
  	
  };
  
  return {
  	onTapAcct : onTapAcct,
  	onLogin	:	onLogin,
  	onLogout :	onLogout,
  	initModule	: initModule
  };
    
}());
