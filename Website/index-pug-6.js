// index-6.js file for Day8to13_Assignment
// author: Jeanne Payoyo
// date: June 10, 2021
// course: CPRG 210 nodeJS
// description: serves out PUG files using express
//				the html files were converted to PUG by myself

// Require the express module
const express = require("express");
const app = express();
const fs = require("fs");
const greeting = require("./greeting.js")

// Allows express to find our files
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

app.get("/thankyou",(req,res) => {
	res.render("thankyou");
	console.log("Sent out pug thankyou page");
});

app.get("/404",(req,res) => {
	res.render("404");
	console.log("Sent out pug 404 page");
});

app.post("/contact", (req,res) => {
	console.log(req.body);
	res.redirect("thankyou");
	console.log("Form submitted.");
});

app.use((req,res) => {
	res.status(404).redirect("404");
	console.log("Error!");
});

// Listens on port 8000
app.listen(8000, () => {
	console.log("Server started for nodeJS assignment. Listening on Port 8000 and serving out pug files.");
});