ladder = (function () {
  var
      main_html = new String()
        + '<div class="ladder-head">'
          + '<div class="ladder-head-login"></div>'
        + '</div>';

  //------------------- Export public interface -------------------

  initModule = function ( $container ) {
    // Load the main html
    $container.html( main_html );
  };

  return { initModule : initModule };
}());
