
ladder.login_logout = (function () {

  onTapAcct = function ( event ) {
    var acct_text, user_name, user = ladder.model.get_user();
    if ( user == "anon" ) {
      user_name = prompt( 'Please sign-in' );
      ladder.model.login( user_name );
      jqueryMap.$acct.text( '... processing ...' );
    }
    else {
     ladder.model.logout();
    }
    return false;
  };

  onLogin = function ( event, login_user ) {
    jqueryMap.$acct.text( login_user.name );
  };

  onLogout = function ( event, logout_user ) {
    jqueryMap.$acct.text( 'Please sign-in' );
  };

  return {
  	onTapAcct : onTapAcct,
  	onLogin	:	onLogin,
  	onLogout :	onLogout
  };
    
}());
