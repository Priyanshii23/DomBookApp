let form = document.getElementById("form");
form.addEventListener("submit", function () {
    // alert("Login Successful")
    let email = form.email.value;
    let password = form.password.value;


    //Email: admin@empher.com
    // Password: empher@123
    if (email == "admin@empher.com") {
        if (password == "empher@123empher@123") {
            alert("Logged in as Admin")
            window.location.href = "admin.html"
            
        } else {
            alert("Please enter correct password")
        }
    } else {
        alert(" Login Failed.. Please enter correct password...")
    }
})