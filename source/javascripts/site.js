window.onload = function() {

	function refreshTime() {
		let currentTime = new Date();
		document.getElementById("current_date").innerHTML = currentTime.toTimeString();
	};

	setInterval(refreshTime, 1000);

	function passedTime() {
	};

};
