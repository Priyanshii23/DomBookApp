import { baseUrl } from "../../backend/baseUrl.js";
 
let book = document.getElementById("book")
book.addEventListener("submit", function(){

    event.preventDefault()
    let avail = book.getElementById("avail");
     avail.textContent = book.avail.value;

     let borrow = book.getElementById("borrow")
     borrow.textContent = book.borrow. value
 

     avail.addEventListener("click", function(){
        fetch(`${baseUrl}/books`)
        .then((res)=> res.json())
        .then((data)=> {
            method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify("book")}
        )
        .catch(err)
     })
})
