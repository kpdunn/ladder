
ladder.login_logout = (function () {

  onTapAcct = function ( event ) {
    var acct_text, user_name, user = spa.model.people.get_user();
    if ( user.get_is_anon() ) {
      user_name = prompt( 'Please sign-in' );
      spa.model.people.login( user_name );
      jqueryMap.$acct.text( '... processing ...' );
    }
    else {
     spa.model.people.logout();
    }
    return false;
  };

  onLogin = function ( event, login_user ) {
    jqueryMap.$acct.text( login_user.name );
  };

  onLogout = function ( event, logout_user ) {
    jqueryMap.$acct.text( 'Please sign-in' );
  };

}());
