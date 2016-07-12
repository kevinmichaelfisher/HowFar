function initializeContextMenu() {
	var parentContextMenuItem = chrome.contextMenus.create({"title": "HowFar", "contexts": ["selection"], "id": "parentContextMenuItem"});
	var setAsOriginContextMenuItem = chrome.contextMenus.create({"title": "Set as origin", "id": "setAsOriginContextMenuItem", "parentId": "parentContextMenuItem", "contexts": ["selection"]});
	var setAsDestinationContextMenuItem = chrome.contextMenus.create({"title": "Set as destination", "id": "setAsDestinationContextMenuItem", "parentId": "parentContextMenuItem", "contexts": ["selection"]});
}

chrome.runtime.onInstalled.addListener(initializeContextMenu());
