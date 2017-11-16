
var userName = "test";
var password = "password";

$(document).ready(function () {

        $("#submit").click(function () {
                if (userName == $("userName").val() && password == $("password").val());
                location = "loginPage.html"
        });

});


// function pasuser(form) {
//         if (form.id.value == "JavaScript") {
//                 if (form.pass.value == "Kit") {
//                         location = "page2.html"
//                 } else {
//                         alert("Invalid Password")
//                 }
//         } else {
//                 alert("Invalid UserID")
//         }
// }