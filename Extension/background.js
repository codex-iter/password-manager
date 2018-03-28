
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("username : " + request.email);
    console.log("password : " + request.pass);
    localStorage.setItem(request.email, request.pass);
});
