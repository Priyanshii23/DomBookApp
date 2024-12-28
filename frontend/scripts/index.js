import { baseUrl } from "../../backend/baseUrl.js";

let form = document.getElementById("form");
form.addEventListener("submit", function () {
    // alert("Login Successful")
    let email = form.email.value;
    let password = form.password.value;


    //Email: admin@empher.com
    // Password: empher@123

    
    // Email: user@empher.com
    // Password: user@123

    if (email == "admin@empher.com" || "user@empher.com") {
        
        
        if (password == "empher@123"|| "user@empher.com") {
           
            if(email=="admin@empher.com"){
                alert("Logged In as Admin");
                window.location.href = "admin.html"
            } else {
                alert("Login Successful");
                window.location.href = "books.html"
            }
            localStorage.setItem("loginData", JSON.stringify)

        } else {
            alert("Please enter correct password")
        }
    } else {
        alert(" Login Failed.. Please enter correct password...")
    }


})