var howFar = {
	origin: "",
	destination: ""
};

function initializeContextMenu() {
	var parentContextMenuItem = chrome.contextMenus.create({"title": "HowFar", "contexts": ["selection"], "id": "parentContextMenuItem"});
	var setAsOriginContextMenuItem = chrome.contextMenus.create({"title": "Set as origin", "id": "setAsOriginContextMenuItem", "parentId": "parentContextMenuItem", "contexts": ["selection"]});
	var setAsDestinationContextMenuItem = chrome.contextMenus.create({"title": "Set as destination", "id": "setAsDestinationContextMenuItem", "parentId": "parentContextMenuItem", "contexts": ["selection"]});
}

function onContextMenuClicked(info, tab) {
	if (info.menuItemId === "setAsOriginContextMenuItem") {
		console.log("Context menu item clicked: \"setAsOriginContextMenuItem\"");
		howFar.origin = info.selectionText;
		console.log("Origin set to: " + howFar.origin);
	}
	else if (info.menuItemId === "setAsDestinationContextMenuItem") {
		console.log("Context menu item clicked: \"setAsDestinationContextMenuItem\"");
		howFar.destination = info.selectionText
		console.log("Destination set to: " + howFar.destination);
	}
}

function onBrowserActionClicked() {
	console.log("onBrowserActionClicked");
	if (howFar.origin !== "") {
		console.log("onBrowserActionClicked howFar.origin");
		$("#origin-input")[0].value = howFar.origin;
	}
	else if (howFar.destination !== "") {
		console.log("onBrowserActionClicked howFar.destination");
		$("#destination-input")[0].value = howFar.destination;
	}
}

chrome.runtime.onInstalled.addListener(initializeContextMenu);
chrome.contextMenus.onClicked.addListener(onContextMenuClicked);
chrome.browserAction.onClicked.addListener(onBrowserActionClicked);