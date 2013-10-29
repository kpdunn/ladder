
ladder.login_logout = (function () {
  
  var registrationForm = $.get('http://127.0.0.1:3000/forms/register.html', 'html');
  
  //var registrationForm = '../../forms/register.html';
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

  onTapRegister = function ( event ) {
  	ladder.getJqueryMap().$registration.load('/forms/register.html');
    ladder.getJqueryMap().$registration.dialog({
      height: 300,
      width: 350,
      modal: true,
      buttons : [ { 
      	text: "Create User", 
      	click: function() { 
      		alert("submit");
      		var x = $( "#create_user" );
      		alert(x.html());
      		x.submit();
      	} 
      }]
    });
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
  	onTapRegister : onTapRegister,
  	onLogin	:	onLogin,
  	onLogout :	onLogout,
  	initModule	: initModule
  };
    
}());
