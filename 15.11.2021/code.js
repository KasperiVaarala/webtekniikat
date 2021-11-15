document.querySelector("button").addEventListener("click", addNote)
let body = document.querySelector("body")
let n = document.getElementById("name")
let note = document.getElementById("note")
let checkbox = document.getElementById("important")

function addNote() {
    let h3 = document.createElement("h3")
    h3.textContent = n.value + " " + new Date().toLocaleString()
    body.appendChild(h3)
    let p = document.createElement("p")
    p.textContent = note.value;

    if (checkbox.checked){
       h3.classList.add("important") 
       p.classList.add("important")
    }


    body.append(h3, p, document.createElement("hr"))

}
