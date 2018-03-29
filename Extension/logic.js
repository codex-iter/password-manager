var CryptoJS = require('crypto-js');

function popup() {
    chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        var activeTab = tabs[0];
        let msg = {
            message: "start",
            email: document.getElementById('user').value,
            pass: document.getElementById('pswd').value
        }
        chrome.tabs.sendMessage(activeTab.id, msg);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
            var email = document.getElementById('user').value;
            var pass = document.getElementById('pswd').value;
            var hash = CryptoJS.SHA3(pass);
            localStorage.setItem(email, hash);
        },
        false);
}, false);
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("save").addEventListener("click", popup);
});
/** For example !! */
var abc = "sdsabfkjdbvkdbkvgwd";
var hash = CryptoJS.SHA3(abc);
alert(hash);
