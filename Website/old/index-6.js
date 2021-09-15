// index-6.js file for Day8to13_Assignment
// author: Jeanne Payoyo
// description: sends out healthybird homepage with random greeting, about and contact page
//				sends out thank you page on form submission and 404 on error
// details: adapted from index-5.js to send out pug files	

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
// Set directory for template files
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.get("/", (req,res) => {
	var mygreet = greeting.greet()
	res.render("homepage",{ maingreet : mygreet });
	console.log("Sent out pug homepage: " + mygreet);
});

app.get("/homepage",(req,res) => {
	var mygreet = greeting.greet()
	res.render("homepage",{ maingreet : mygreet });
	console.log("Sent out pug homepage: " + mygreet);
});


app.get("/about",(req,res) => {
	res.render("about");
	console.log("Sent out pug about page");
});

app.get("/contact",(req,res) => {
	res.render("contact");
	console.log("Sent out pug contact page");
});

app.post("/contact", (req,res) => {
	console.log(req.body);
	res.render("thankyou");
	console.log("Sent out pug thankyou page");
});

app.use((req,res) => {
	res.status(404).redirect("404");
	console.log("Sent out pug 404 page");
});

// Listens on port 8000
app.listen(8000, () => {
	console.log("Server started for nodeJS assignment. Listening on Port 8000 and serving out pug files.");
});