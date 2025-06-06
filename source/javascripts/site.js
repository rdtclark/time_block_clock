window.onload = function() {
	function refreshMinutes() {
		// Count the number of minutes that have passed since 8AM today
		function passed_minutes(now, start_of_day) {
			var diff = (now.getTime() - start_of_day.getTime()) / 1000;
			diff /= 60;
			return Math.abs(Math.round(diff - 480));
		}

		now = new Date();
		today = now.toDateString();
		start_of_day = new Date(today);

		// Create a range method to create a array of minutes passed
		const range = (start, end, length = end - start + 1) => 
			Array.from({ length }, (_, i) => start + i)

		// Array of minutes passed up to current time
		let minutes_passed = range(1, passed_minutes(now, start_of_day))

		// Grab all passed minute blocks from the DOM
		const passed_minute_elements = document.querySelectorAll(
			minutes_passed.map(id => `#block${id}`).join(', ')
		);
		passed_minute_elements.forEach(element => element.classList.add('passed'))

		// Clear all previous 'this_minute' highlights
		document.querySelectorAll('.this_minute').forEach(element => {
			element.classList.remove('this_minute');
		});

		// Highlight current minute
		let current_minute = document.querySelector(`#block${passed_minutes(now, start_of_day)}`);
		if (current_minute) {
			current_minute.classList.add('this_minute');
		}
	};

	refreshMinutes(); // Run once immediately
	setInterval(refreshMinutes, 3000);
};
