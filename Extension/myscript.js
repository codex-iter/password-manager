/*var console = chrome.extension.getBackgroundPage().console;
var email = document.getElementById(document.getElementsByTagName('title')[0].innerHTML);
var app = {
    init: function() {
       
        var cb = document.getElementById('save');

        cb.addEventListener('click', function() {
            chrome.runtime.sendMessage(email.value);
        });
    }
};
document.addEventListener("DOMContentLoaded", function() {
    app.init();
});*/

chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerHTML);
//alert("Data-Saved");
