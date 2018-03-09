document.addEventListener('DOMContentLoaded',function(){
    var link=document.getElementById('link');
    //onClick's Logic Below:
    link.addEventListener('click',function() {
        link.innerHTML="You Clicked Me";
    });
});