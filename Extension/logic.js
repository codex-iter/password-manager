var email; //declared global
var pass;
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
        email = chrome.runtime.sendMessage(document.getElementById('user').value);
        pass = chrome.runtime.sendMessage(document.getElementById('pswd').value);
    }, false);
}, false);
