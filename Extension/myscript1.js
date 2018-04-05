chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "start") {
            document.getElementById('login-email').value = request.email;
            document.getElementById('login-password').value = request.pass;

        }
    });