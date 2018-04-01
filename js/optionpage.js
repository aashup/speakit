$(function () {

    $("#save").on('click', function () {
        chrome.storage.sync.set({
            settings: {
                pitch: $('#pitch').val(),
                rate: $('#rate').val(),
                volume: $('#volume').val()
            }
        }, function () {
            // Notify that we saved.
            alert('Settings saved');
        });
    });
});

$(function () {
    chrome.storage.sync.get("settings", function (s) {
        pitch: $('#pitch').val(s.settings.pitch);
        rate: $('#rate').val(s.settings.rate);
        volume: $('#volume').val(s.settings.volume);
    });
    $("#default").on('click', function () {
        pitch: $('#pitch').val("1");
        rate: $('#rate').val("1");
        volume: $('#volume').val("1");
    });
});