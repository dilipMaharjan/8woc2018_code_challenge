var http = require('http');  //importing http module
var fs = require('fs');  //importing File System module

const PORT = 3000;   //setting port number for the web app; will run on http://localhost:3000
fs.readFile( './views/home.html',   //giving fs path to the home page file
	     function(error, html)  //giving fs function to perform on home.html
             {
             	if(error) throw error;

                http.createServer( function(request, response)
                                   {
				      response.writeHeader( 200,
							    { "Content-Type" : "text/html" }
							  );
				      response.write(html);   //writing html page to server
                                      response.end();
                                   }
                                 ).listen(PORT);   //telling server what port to connect to
             }
           );
