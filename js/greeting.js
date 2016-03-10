/*

	Description: script to generate greeting based on time of day 
	and GET the time and date of user's browserand display on the webpage.
   	 	
   	 	if the hour is greater that 18(6pm) then assign greeting Good evening!
   	 	else if greater than 12 then assign greeting Good afternoon
   	 	else if greater than 0(12am) then assign greeting Good morning
   	 	else assign greeting Good morning
*/


//refers so HTML page, tells it to put it in the Id called "Greeting"
document.getElementById('greeting').innerHTML = greeting;


var updateGreeting = function(hour) {
	
	var greeting;

	var currentTime = new Date();
	var currentHours24 = currentTime.getHours();

	if (currentHours24 >= 18) { // hour including 6pm or later
		greeting = 'Good Evening!';
		document.getElementById("container").style.backgroundColor = "black";
		document.getElementById("container").style.color = "white"
	} 
	else if (currentHours24 >= 12) {
    	greeting = 'Good Afternoon!';
		document.getElementById("container").style.backgroundColor = "turquoise";	
	} 
	else if (currentHours24 == 4 && currentMinutes == 20){
		greeting = '420 ayyy'
		document.getElementById("container").style.backgroundColor = "green";
	}
	else if (currentHours24 >= 0) {
    	greeting = 'Good Morning!';
		document.getElementById("container").style.backgroundColor = "orange";
	} 
	else {
		greeting = 'Welcome!';
	}  
	
	return greeting;
}

var updateClock = function() {
	var currentTime = new Date();
	// alert(currentTime); //this comes out: Mon Feb 22 2016 17:28:05 GMT-0800 (PST)

	var currentHours24 = currentTime.getHours(); // hour is in 24 not 12. Get hours from Date()
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();

	//if it's less than 12 then show AM; else if more than 12 then show PM 
	var amOrPm = (currentHours24 < 12) ? "AM" : "PM" ;

	//if hour is more than 12, then convert to 12 hr clock by subtracting 12; else keep the time
	var currentHours12 = (currentHours24 > 12) ? currentHours24-12 : currentHours12 ; 

	//convert hour 0 to 12 
	currentHours12 = (currentHours24 == 0) ? 12: currentHours12;

	// put the time string together ready for display 
	var currentTimeString = "Current time is " + currentHours12 + " : " + currentMinutes + " : " + currentSeconds + " " + amOrPm;

	//Tells HTML page, tells the page to put update the hour 
	document.getElementById("greeting").innerHTML = updateGreeting(currentHours24);

	//tells HTML page, update all the thang 
	document.getElementById("clock").innerHTML = currentTimeString;
}
