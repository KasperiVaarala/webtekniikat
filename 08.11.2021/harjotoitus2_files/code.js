//a
let header = document.querySelector("h2");
let newHeader = document.createElement("h2");
newHeader.innerHTML = "Esktetit"
header.parentNode.replaceChild(newHeader, header);

// tai 
// let h2= document.querySelector("h2")
//h2.textContent="Esketit"


//b

let line = document.createElement("hr")
newHeader.parentNode.insertBefore(line,newHeader)

//c
let article = document.querySelector("article")
let p1 = article.firstElementChild
let p2 = article.lastElementChild
let temp = p1.textContent
p1.textContent = p2.textContent
p2.textContent = temp

//d
let content = document.getElementById("content")
let ul = document.createElement("ul")


for (let i = 1; i < 6; i++){
    let li = document.createElement("li")
    li.textContent = "Number " + i
    ul.appendChild(li)
}
content.appendChild(ul)

//e

let 