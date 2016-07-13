var howFar = {
	origin: "origin",
	destination: "destination"
};

$(document).keypress(function(e) {
	if (e.keyCode == 13) {
		var mapDiv = $("#map")[0];
		//var originInput = $("#origin-input")[0];
		//console.log("Origin: " + originInput.value);
		howFar.origin = $("#origin-input")[0].value;
		console.log("Origin: " + howFar.origin);

		mapDiv.setAttribute("height", "500");
		mapDiv.setAttribute("width", "500");
		var srcAttribute = document.createAttribute("src");
		srcAttribute.value = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDemdTKRlYMUKo29J4fNqnAmkgmEiK_AnA&origin=Lincoln+Park+Zoo,+North+Clark+Street,+Chicago,+IL&destination=Willis+Tower,+South+Wacker+Drive,+Chicago,+IL";
		mapDiv.setAttributeNode(srcAttribute);
		
	}
});




//alert("parent item set to " + parentItem + " origin item set to " + originItem);