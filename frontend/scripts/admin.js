import { baseUrl } from "../../backend/baseUrl.js";

// let loginData = JSON.parse(localStorage.getItem("loginData"))
// console.log(loginData)

let admin_form = document.getElementById("admin")
admin_form.addEventListener("submit", function(){
    event.preventDefault()
    let title = admin_form.title.vallue;
    let author = admin_form.author.value;
    let category = admin_form.category.value;

    let books= {title, author, category}

    fetch(`${baseUrl}/books`)
    .then((res)=>res.json())
    .then((data)=>{
          method: "POST";
          Headers:{"content-type"; "application/json" }
         body : JSON.stringify(books)        
    })
    .catch((err)=>{
        console.log(err)
    })
    alert("Book Added Successfully")
   
})


