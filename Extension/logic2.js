/*var storedVal = document.getElementById("user");
storedVal.value = localStorage.getItem("user");
storedVal2 = document.getElementById("pswd");
storedVal2.value = localStorage.getItem("pswd"); */

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('Ok');
    checkPageButton.addEventListener('click', function() {
            window.close();
        },
        false);
}, false);