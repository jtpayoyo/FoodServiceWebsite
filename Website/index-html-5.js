// index-5.js file for Day8to13_Assignment
// author: Jeanne Payoyo
// date: June 10, 2021
// course: CPRG 210 nodeJS
// description: serves out HTML files using express

// Require the express module
const express = require("express");
const app = express();
const fs = require("fs");
const greeting = require("./greeting.js")

// Allows express to find our files
app.use(express.static("views",{"extensions":["html","htm"]}));
app.use(express.static("public"));
app.use(express.static("media"));
app.use(express.urlencoded({ extended:true })); // need this for the form submission

// When no file name is requested, send to the homepage
app.get("/", (req,res) => {
	thehomepage(req,res);
	console.log("Sent out homepage by app.get");
});

app.get("/homepage", (req,res) => {
	thehomepage(req,res);
	console.log("Sent out homepage by app.get");
});

app.get("/homepage.html", (req,res) => {
	thehomepage(req,res);
	console.log("Sent out homepage by app.get");
});

app.get("/contact", (req,res) => {
	res.sendFile("/contact");
	console.log("Sent out contact by app.get");
});

app.post("/contact", (req,res) => {
	console.log(req.body);
	res.redirect("/thankyou");
	console.log("Sent out thankyou about by app.get");
});

app.get("/about", (req,res) => {
	res.sendFile("/about");
	console.log("Sent out about by app.get");
});

app.get("/thankyou", (req,res) => {
	res.sendFile("/thankyou");
	console.log("Sent out thankyou by app.get");
});

app.get("/404", (req,res) => {
	res.sendFile("/404");
	console.log("Sent out 404 by app.get");
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

// sends out homepage with random greeting
function thehomepage(req,res) {
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
				var mygreet = greeting.greet()
				res.write("<div class='top-pic'><h1 class='top-text'>"+ mygreet +"</h1></div>");
				console.log("Random greeting: " + mygreet);
			
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
}