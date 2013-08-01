
ladder.login_logout = (function () {

  onTapAcct = function ( event ) {
    var acct_text, user_name, user = ladder.model.get_user();
    if ( user == "anon" ) {
      user_name = prompt( 'Please sign-in' );
      ladder.model.login( user_name );
      ladder.getJqueryMap().$login_logout.text( '... processing ...' );
      ladder.getJqueryMap().$login_logout.text( user_name );
    }
    else {
     ladder.model.logout();
    }
    return false;
  };

  onLogin = function ( event, login_user ) {
    ladder.getJqueryMap.$login_logout.text( login_user.name );
  };

  onLogout = function ( event, logout_user ) {
    ladder.getJqueryMap.$login_logout.text( 'Please sign-in' );
    ladder.model.set_user("anon");
  };

  var stateMap = {
  	$container : undefined
  };
    
  return {
  	onTapAcct : onTapAcct,
  	onLogin	:	onLogin,
  	onLogout :	onLogout,
  	initModule	: initModule
  };
    
}());
