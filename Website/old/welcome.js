// 0607 nodeJS day 9:

const http = require("http");
const moment = require("moment");

const greeting = require("./greeting.js")

var server = http.createServer((req,res)=>{
	res.writeHead(200,{"content-type":"text/html"});
	res.write("<!DOCTYPE html><html><head><title>Greetings</title></head><body>");
	// greet is declared as a function and brings back the randomly selected greeting
	// must call the function with parentheses
	res.write("<h1>" + greeting.greet() + "</h1>");
	res.write("<h2>" + moment().format("dddd, MMMM Do YYYY, h:mm:ss a") + "</h2>");
	
	// end will print out the rest, and then end the response
	res.end("</body></html>");
});

// Can be put in separate statements so it's easier to read
server.listen(8000, ()=> { console.log("Server started"); });