import { baseUrl } from "../../backend/baseUrl.js";

// let loginData = JSON.parse(localStorage.getItem("loginData"))
// console.log(loginData)

let admin_form = document.getElementById("admin")
admin_form.addEventListener("submit", async function () {
    event.preventDefault()
    let title = admin_form.title.vallue;
    let author = admin_form.author.value;
    let category = admin_form.category.value;

    let book = { title, author, category }


    try {

        await fetch(`${baseUrl}/books`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify("book")
        });
        alert("Books Added Successfully")
    }
    catch (err) {
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
getData()
function getData() {
    fetch(`${baseUrl}/books`)
        .then((res) => res.josn)
        .then((data) => {
            console.log(data)
            displayData(data)
           
        })
        .catch((err) => {
            console.log(err)
        })
}

function displayData(arr) {
    let cont = document.getElementById("cont")
    cont.addEventListener("click", function () {
        cont.innerHTML = "";
        arr.map((el, i) => {

            let card = document.createElement("div")

            let title = document.createElement("h3");
            title.textContent = `Title: ${el.title}`;
            let author = document.createElement("h4")
            author.textContent = `Author: ${el.author}`;
            let category = document.createElement("h5")
            category.textContent = `Category: ${el.category}`

            let availabilityStatus = createElement("h5")
            availabilityStatus.textContent = `Availability Status: `

            let verify = createElement("button")
            verify.value = `Verify`;

            verify.addEventListener("click", function(){
                confirm("Are you sure to verify?")
           })

            let deletebtn = createElement("button")
            deletebtn.value = "Delete"
            deletebtn.addEventListener("click", async function () {
                confirm("Are you sure to delete?")
                await fetch(`${baseUrl}/books`, {
                method:"DELETE"
                   
                });
            })
            displayData(arr)




            let borrowedDays = createElement("h5")
            borrowedDays.textContent = `Borrowed Dyas: `
            card.append(title, author, cateogory, availabilityStatus, borrowedDays, verify, deletebtn);
            cont.append(card)
        })
    })
}


