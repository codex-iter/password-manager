chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "start") {
            document.getElementById('email').value = request.email;
            document.getElementById('pass').value = request.pass;

        }
    }
);
