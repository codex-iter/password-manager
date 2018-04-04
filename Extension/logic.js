/*function popup() {
    chrome.tabs.query({ currentWindow: true, active: true, 'lastFocusedWindow': true }, function(tabs) {
        var activeTab = tabs[0];
        let msg = {
            message: "start",
            email: document.getElementById('user').value,
            pass: document.getElementById('pswd').value
        }
        chrome.tabs.sendMessage(activeTab.id, msg);
    });
}*/
function popup() {
    chrome.tabs.query({ currentWindow: true, pinned: true }, function(tabs) {
        tabs.forEach(function(tab) {
            console.log('Tab URL: ', tab.url);
            let msg = {
                message: "start",
                email: document.getElementById('user').value,
                pass: document.getElementById('pswd').value
            }
            chrome.tabs.sendMessage(tab.id, msg);
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('save');
    checkPageButton.addEventListener('click', function() {
            var email = document.getElementById('user').value;
            var pass = document.getElementById('pswd').value;
            if (!localStorage.key(email)) {
                localStorage.setItem(email, pass);
            }
            if (localStorage.key(email)) {
                if (pass == 0) {
                    document.getElementById('pswd').value = localStorage.getItem(email);
                } else {
                    localStorage.setItem(email, pass);
                }
            }
        },
        false);
}, false);
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("save").addEventListener("click", popup);
});
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('never');
    checkPageButton.addEventListener('click', function() {
            window.close();
        },
        false);
}, false);
