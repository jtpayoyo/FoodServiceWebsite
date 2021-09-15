// index-2.js file for Day8to13_Assignment
// author: Jeanne Payoyo
// description: adapted from index-2.js 
// 				placed contents of myhome.js into the homepage part

// Require the express module
const express = require("express");
const app = express();
const fs = require("fs");
const greeting = require("./greeting.js")

// Allows express to find our files
app.use(express.static("views",{"extensions":["html","htm"]}));
app.use(express.static("public"));
app.use(express.static("media"));

// When no file name is requested, send to the homepage
app.get("/", (req,res) => {
	var filename1 = __dirname + "/views/homepart-1.html"
	var filename2 = __dirname + "/views/homepart-2.html"
	fs.readFile(filename1,(err,data) =>{
		if (err) {
			console.log("Error reading "+filename1)
			throw err;
		}
		else {
			res.writeHead(200, {'Content-Type': 'text/html'} );
			res.write(data);
			res.write("<div class='top-pic'><h1 class='top-text'>"+ greeting.greet() +"</h1></div>");
		
			fs.readFile(filename2,(err1,data1) => {
				if (err1) {
					console.log("Error reading "+filename1)
					throw err1;
				}	
				else {
					res.write(data1);
					res.end();
				}
			});
			
		}
	});
	console.log("Sent out myhome.js");
});

app.get("/contact", (req,res) => {
	res.sendFile("/contact");
	console.log("Sent out contact.html");
});

app.get("/about", (req,res) => {
	res.sendFile("/about");
	console.log("Sent out about.html");
});

// If there is no matching file name, send the 404 page
app.use((req,res) => {
	res.status(404).sendFile(__dirname + "/views/404.html");
	console.log("Sent out 404.html");
});

// Listens on port 8000
app.listen(8000, () => {
	console.log("Server started for nodeJS assignment");
});