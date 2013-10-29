ladder = (function () {
  	var
      main_html = new String()
        + '<div class="ladder-head">'
          + '<div class="ladder-head-login"></div>'
          + '<div class="ladder-head-register"></div>'
          + '<div class="ladder-registration" style="display:none;"></div>'
        + '</div>';

//	var registration_form_html = new String()
//		+ '<div class="ladder-registration" title="Basic modal dialog">'
//  		+ '<p>Adding the modal overlay screen makes the dialog look more prominent because it dims out the page content.</p>'
//		+ '</div>';
		
	var setJqueryMap = function () {
	   
	   var $container = stateMap.$container;
	   
    	jqueryMap = {
      		$container 			: $container,
      		$login_logout      	: $container.find('.ladder-head-login'),
      		$register      		: $container.find('.ladder-head-register'),
      		$registration      	: $container.find('.ladder-registration')
    	};
  	};

	var jqueryMap = {};

    var stateMap  = {
      $container  : undefined,
    };
	
  //------------------- Export public interface -------------------

  initModule = function ( $container ) {
    // Load the main html
    stateMap.$container = $container;
    $container.html( main_html );
    setJqueryMap();
    jqueryMap.$login_logout
      .text( 'Please sign-in')
      .bind( 'utap', onTapAcct )
      .bind( 'ladder-logout', onLogout);
  	
    jqueryMap.$register
      .text( 'Register Now')
      .bind( 'utap', onTapRegister );
  	
  	};
  	
	getJqueryMap = function() {
		return jqueryMap;
	};
	
	return { initModule : initModule,
		     getJqueryMap  : getJqueryMap };
  
}());
