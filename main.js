if ("geolocation" in navigator) {
	console.log("Geolocation is available");
	navigator.geolocation.getCurrentPosition(displayPosition, showPositionError);
} else {
	alert("You don't have Geolocation. Time to upgrade your browser.");
}

function displayPosition (data) {
	console.log("Got position!")
	console.log(data)
}

function showPositionError (error) {
	console.log("Failed to get position :(")
	console.log(error)
}