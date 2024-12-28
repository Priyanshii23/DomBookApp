import { baseUrl } from "../../backend/baseUrl.js";

// let loginData = JSON.parse(localStorage.getItem("loginData"))
// console.log(loginData)

let admin_form = document.getElementById("admin")
admin_form.addEventListener("submit", async function () {
    event.preventDefault()
    let title = admin_form.title.vallue;
    let author = admin_form.author.value;
    let category = admin_form.category.value;

    let books = { title, author, category }


    try {
        await fetch( `${baseUrl}/books`,{
         method: "POST",
         headers:{ "content-type":"application/json"},
         body: JSON.stringify("books")
        });
        alert("Books Added Successfully")
    }
    catch(err){
        alert("Something went wrong")
    }



    // fetch(`${baseUrl}/books`)
    // .then((res)=>res.json())
    // .then((data)=>{
    //       method: "POST";
    //       Headers:{"content-type"; "application/json" }
    //      body : JSON.stringify(books) 
    //      alert("Book Added Successfully")       
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
   
   
})

function getData() {
    fetch(`${baseUrl}/books`)
        .then((res) => res.josn)
        .then((data) => {
            console.log(data)

        })
        .catch((err) => {
            console.log(err)
        })
}

function displayData() {
    

}


