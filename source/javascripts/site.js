window.onload = function() {

	// Show the current time in the header
	function refreshTime() {
		let currentTime = new Date();
		document.getElementById("current_date").innerHTML = currentTime.toTimeString();
	};

	// Update the clock every second
	setInterval(refreshTime, 1000);

	// Count the number of minutes that have passed since today began
	function passed_minutes(now, start_of_day) 
	{
		var diff =(now.getTime() - start_of_day.getTime()) / 1000;
		diff /= 60;
		return Math.abs(Math.round(diff+720));
	}

	now = new Date();
	dt3 = dt2.toDateString();
	start_of_day = new Date(dt3);

	// next step is to create an array of ids that end with
	// diff_mutes and add the "passed" class to them
	// start with looping over const message = `block${number}`;
	// for each id starting at 1...passed_minutes

};
