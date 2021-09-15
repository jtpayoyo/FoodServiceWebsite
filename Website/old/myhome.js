// myhome.js
// author: Jeanne Payoyo
// description: made to print the website
// didn't really work out bc it kept getting printed to the browser
// but acted as the framework for thehomepage(req,res) in the index files

const fs = require("fs");
const greeting = require("./greeting.js")

var filename1 = "/views/homepart-1.html"
var filename2 = "/views/homepart-2.html"
fs.readFile(filename1,(err,data) =>{
	if (err) {
		console.log("Error reading "+filename1)
		throw err;
	}
	else {
		response.writeHead(200, {'Content-Type': 'text/html'} );
		response.write(data);
		response.write("<div class='top-pic'><h1 class='top-text'>"+ greetings.greet() +"</h1></div>");
		
		fs.readFile(filename2,(err1,data1) => {
			if (err1) {
				console.log("Error reading "+filename1)
				throw err1;
			}	
			else {
				response.write(data1);
				response.end();
			}
		});
		
	}
});

