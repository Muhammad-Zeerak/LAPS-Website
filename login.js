// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;
    if (username == "admin" && password == "admin123") {
        window.location = "dashboard.html"; // Redirecting to other page.
        return false;
    } else if (username != "admin") {
        alert("Username incorrect!");
    } else {
        alert("Password incorrect!");
    }
}
