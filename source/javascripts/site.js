window.onload = function() {

	// Show the current time in the header
	function refreshTime() {
		let currentTime = new Date();
		document.getElementById("current_date").innerHTML = currentTime.toTimeString();
	};

	// Update the clock every second
	setInterval(refreshTime, 1000);

	function refreshMinutes() {
		// Count the number of minutes that have passed since 8AM today
		function passed_minutes(now, start_of_day) 
		{
			var diff =(now.getTime() - start_of_day.getTime()) / 1000;
			diff /= 60;
			return Math.abs(Math.round(diff-480));
		}

		now = new Date();
		dt3 = now.toDateString();
		start_of_day = new Date(dt3);

		// Create a range method to create a array of minutes passed
		const range = (start, end, length = end - start + 1) =>
			Array.from({ length }, (_, i) => start + i)

		// Array of minutes passed up to current time
		let minutes_passed = range(1, passed_minutes(now, start_of_day))

		// Add selector to pass to grab from the DOM 
		const passed_minute_elements = document.querySelectorAll(minutes_passed.map(id => `#block${id}`).join(', '));

		passed_minute_elements.forEach(element =>
			element.classList.add('passed')
		)

		// Identify current minute on the clock
		let current_minute = document.querySelectorAll(`#block${passed_minutes(now, start_of_day)}`)
		current_minute.item(0).classList.toggle('this_minute')
		current_minute.item(0).classList.add('this_minute')
	};

	setInterval(refreshMinutes, 60000);

};
