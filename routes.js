module.exports = function( app ) {

	var mongodb = require('mongodb');
	var mongoserver = new mongodb.Server('localhost',
						mongodb.Connection.DEFAULT_PORT);
	var db = new mongodb.Db('ladder', mongoserver);
	
	db.open( function() {
		console.log('Connected to Mongo');
	});
	
  // Routes
  app.all( '/:object/*?', function ( req, res, next ) {
    res.contentType( 'json' );
    next();
  });

  app.get( '/:object/list', function ( req, res ) {
    res.send( { title: objectify(req.params.object) + ' list' } );
  });

  app.post( '/:object/create', function ( req, res ) {
    //res.send( { title: objectify(req.params.object)  + ' created' } );
    var body = "";
    req.on('data', function (data) {console.log("data: " + data); body = body + data;});
	console.log("Create User received");
    db.collection(req.params.object, function(err, collection) {
    	var options_map = { safe: true };
    	var object_map = body;
    	
    	collection.insert(object_map, options_map, function (err, result) {
    		res.send(result);
    	});
    });
  });

  app.get( '/:object/read/:id([0-9]+)', function ( req, res ) {
    res.send( { title: objectify(req.params.object) + 
      ' with id ' + req.params.id + ' found' } );
  });

  app.post( '/:object/update/:id([0-9]+)', function ( req, res ) {
    res.send( { title: objectify(req.params.object) + 
      ' with id ' + req.params.id + ' updated' } );
  });

  app.get( '/:object/delete/:id([0-9]+)', function ( req, res ) {
    res.send( { title: objectify(req.params.object) + 
      ' with id ' + req.params.id + ' deleted' } );
  });

  app.get( '/', function ( req, res ) {
    res.send( { title: 'Express' } );
  });

  function objectify ( str ) {
    str = str.slice( 0, -1 );
    str = str.charAt( 0 ).toUpperCase() + str.substring( 1 ).toLowerCase();

    return str;
  }
};