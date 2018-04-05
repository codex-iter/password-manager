document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('chkbx');
    checkPageButton.addEventListener('click', function() {

            var x = document.getElementById("pswd");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        },

        false);
}, false);