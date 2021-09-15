// myhome.js

const greeting = require("./greeting.js")

writeHead(200,{"content-type":"text/html"});
res.write("<!DOCTYPE html> <html> <head><title>healthybird homepage</title><link rel='icon' type='image/png' href='healthybird-logo-2.png' /><link rel='stylesheet' href='reset.css'/>
		<link rel='stylesheet' href='styles.css'/>
		<!-- Bootstrap -->
		<meta charset='utf-8' />
		<meta name='viewport' content='width=device-width,initial-scale=1' />
		<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x' crossorigin='anonymous'/>
		<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js' integrity='sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4' crossorigin='anonymous'></script>
		<!-- Free icons from ion-icon -->
		<script type='module' src='https://unpkg.com/ionicons@5.5.1/dist/ionicons/ionicons.esm.js'></script>
	</head>
	
	<body>
		<!-- HEADER + NAV -->
		<header>
			<h1> <a href='homepage.html'><img class='mylogo' src='healthybird-logo-2.png' alt='healthybird logo' title='healthybird logo' valign='middle' /></a>healthybird</h1>
		</header>
		
		
		<nav>
			<ul class='main-nav'>
				<li><a href='contact.html'>Contact</a></li>
				<li><a href='about.html'>About</a></li>
				<li><a href='homepage.html'>Home</a></li>
			</ul>
		</nav>
		
		<div style='clear:both;'></div>");
		
res.write("<!-- HOMEPAGE IMAGE -->
		<div class='top-pic'>
			<h1 class='top-text'>");
res.write("Welcome</h1></div>");