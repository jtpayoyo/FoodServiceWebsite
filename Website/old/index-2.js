// index-2.js file for Day8to13_Assignment
// author: Jeanne Payoyo
// description: adapted from index.js 
// 				attempt to pass a js file into res.sendFile

// Require the express module
const express = require("express");
const app = express();

// Allows express to find our files
app.use(express.static("views",{"extensions":["html","htm"]}));
app.use(express.static("public"));
// app.use(express.static("media",{"extensions":["jpg","jpeg","png"]}));
app.use(express.static("media"));

// When no file name is requested, send to the homepage
app.get("/", (req,res) => {
	res.sendFile( __dirname + "/myhome.js");
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