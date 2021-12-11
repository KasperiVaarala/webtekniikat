// lets createe a HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api",true);
// send request
xmlhttp.send();

//create an event handler
xmlhttp.onreadystatechange=function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200)
    {
        //response is ready
        let answerObject = JSON.parse(xmlhttp.response)
        //added text answer
        document.getElementById("answer").innerHTML= answerObject.answer;
        //lets add an image
        document.getElementById("answer_image").setAttribute('src', answerObject.image);
  }
}