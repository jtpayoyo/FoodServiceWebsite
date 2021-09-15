// greeting generator
// author: Jeanne Payoyo
// description: randomly choose a greeting from an array
// 0607 nodeJS day 9: building a greetings array
// 0609 nodeJS day 12: adapting this to my website

const GREETINGS = [ "Welcome","Feel Well","Eat Well","Be Well","Let's Cook","Time to Cook","Let's Eat","Time to Eat","Stay Healthy","Feel Healthy" ];

/*
exports.greet = function getGreeting()
{
	// Math.random gives us a random number from 0 to 1
	// We multiply by the length to get it in the array index range
	// Math.floor rounds down to an integer value
	let rand = Math.floor( Math.random() * GREETINGS.length );
	return GREETINGS[rand];
}
*/

// anonymous function
exports.greet = ()=>
{
	// Math.random gives us a random number from 0 to 1
	// We multiply by the length to get it in the array index range
	// Math.floor rounds down to an integer value
	let rand = Math.floor( Math.random() * GREETINGS.length );
	return GREETINGS[rand];
}
