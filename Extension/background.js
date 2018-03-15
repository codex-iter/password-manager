/*var background = {
    init: function() {
        var Username = [];
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            console.log("Username : " + request);
            var store = request;
            localStorage.setItem("Username", store);
            

        });
    }
};
background.init();*/
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
console.log(request);
var store=request;
localStorage['Title']=store;

//localStorage.setItem("Title",request);
});