var howFar_popup = {
	origin: "",
	destination: ""
};

var responseCallback = function(response) {
	if (response.origin) {
		$("#origin-input")[0].value = response.origin;
		howFar_popup.origin = response.origin;
	}
	if (response.destination) {
		$("#destination-input")[0].value = response.destination;
		howFar_popup.destination = response.destination;
	}
}

var displayMap = function() {
	var mapDiv = $("#map")[0];
	mapDiv.setAttribute("height", "500");
	mapDiv.setAttribute("width", "500");
	var srcAttribute = document.createAttribute("src");
	srcAttribute.value = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDemdTKRlYMUKo29J4fNqnAmkgmEiK_AnA&origin=" + howFar_popup.origin + "&destination=" + howFar_popup.destination;
	mapDiv.setAttributeNode(srcAttribute);
}


$(document).ready(function() {
	chrome.runtime.sendMessage({onClicked: true}, responseCallback);
	$(document).keypress(function(e) { 
		if (e.keyCode == 13)
			displayMap();
	});
	$("#directionsButton").click(displayMap);
	//$("#setOriginToCurrentLocationButton").click(setOriginToCurrentLocationButton_onClickHandler);
	//$("#setDestinationToCurrentLocationButton").click(setDestinationToCurrentLocationButton_onClickHandler);
});





/*
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS version yet.');
}
*/

