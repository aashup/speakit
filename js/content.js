chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "speak") {
        chrome.storage.sync.get("settings", function (s) {
            obj = new SpeechSynthesisUtterance(window.getSelection().toString(), "", null, s.settings.volume, s.settings.rate, s.settings.pitch);
            window.speechSynthesis.speak(obj);
        });
    }
    if (msg.action === "getAllVoice") {
        sendResponse(window.speechSynthesis.getVoices());
    }

});