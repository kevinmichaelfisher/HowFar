var howFar_eventpage = {
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
		howFar_eventpage.origin = info.selectionText;
	}
	else if (info.menuItemId === "setAsDestinationContextMenuItem") {
		howFar_eventpage.destination = info.selectionText;
	}
}

function onBrowserActionClicked(message, sender, sendResponse) {
	if (message.onClicked) {
		responseMessage = {};
		if (howFar_eventpage.origin !== "") {
			responseMessage.origin = howFar_eventpage.origin;
		}
		if (howFar_eventpage.destination !== "") {
			responseMessage.destination = howFar_eventpage.destination;
		}
		sendResponse(responseMessage);
	}
}

chrome.runtime.onInstalled.addListener(initializeContextMenu);
chrome.contextMenus.onClicked.addListener(onContextMenuClicked);
chrome.runtime.onMessage.addListener(onBrowserActionClicked);