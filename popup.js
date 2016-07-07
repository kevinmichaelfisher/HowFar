document.onkeypress = function(e) {
	if (e.keyCode == 13) {
		var mapDiv = document.getElementById("map");
		mapDiv.setAttribute("height", "500");
		mapDiv.setAttribute("width", "500");
		var srcAttribute = document.createAttribute("src");
		srcAttribute.value = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyDemdTKRlYMUKo29J4fNqnAmkgmEiK_AnA&origin=Lincoln+Park+Zoo,+North+Clark+Street,+Chicago,+IL&destination=Willis+Tower,+South+Wacker+Drive,+Chicago,+IL";
		mapDiv.setAttributeNode(srcAttribute);
	}
}