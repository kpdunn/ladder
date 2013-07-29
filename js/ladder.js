ladder = (function () {
  	var
      main_html = new String()
        + '<div class="ladder-head">'
          + '<div class="ladder-head-login"></div>'
        + '</div>';

	var setJqueryMap = function () {
	   
	   var $container = stateMap.$container;
	   
    	jqueryMap = {
      		$container 			: $container,
      		$login_logout      	: $container.find('.ladder-head-login')
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
      .bind( 'utap', onTapAcct );
  	};
  	
  return { initModule : initModule };
  
}());
