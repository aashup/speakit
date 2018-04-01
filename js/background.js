(function () {
    contextMenu = {
        "id": "text-to-voice",
        "title": "Text to voice",
        "contexts": ["selection"],
        "visible": true,
    };
    chrome.contextMenus.create(contextMenu);
})();
(function () {
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.greeting == "hello")
                sendResponse({farewell: "goodbye"});
        });
})();

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    chrome.tabs.sendMessage(tab.id, {
        action: 'speak',
    });

    return true;
})
(function () {


    chrome.commands.onCommand.addListener(function (command) {
        if (command === "start-ttl") {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: 'speak',
                });
            });
        }
        if (command === "stop-ttl") {
            chrome.ttl.stop();
        }
        console.log('Command:', command);
    });
})();