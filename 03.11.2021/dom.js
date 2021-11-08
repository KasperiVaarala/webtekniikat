var cont = document.querySelector("#content")
console.log(cont.nodeName)

var basic = document.querySelector(".basic")
console.log(basic.nodeName)

var printAll = document.querySelectorAll("li")
for(i of printAll){
console.log(i.textContent)
}

var body = document.querySelector("body")
var allNodes = body.querySelectorAll("*")
for (x of allNodes){
    console.log(x.nodeName)
}

var article = document.querySelector("article")
for (i of article.querySelectorAll("p")){
    console.log("**" + i.textContent)
}
// tehtävä f
for(i of printAll){
    i.textContent = "John Doe"
    }

    
