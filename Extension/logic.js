
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
            if (localStorage.key(email)) {
                var pass = document.getElementById('pswd').value = localStorage.getItem(email);
            } else {
                var pass = document.getElementById('pswd').value;
                localStorage.setItem(email, pass);
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
