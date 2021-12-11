

let courses = [];

document.querySelector("button").addEventListener("click", addCourse);
document.getElementById("show").addEventListener("click", showAll);

function addCourse(){
    //haetaan tiedot inputeista
 let cname = document.getElementById("course").value;
 let sNum = document.getElementById("student_num").value;
//luodaan olio tiedoista
 let course = {
     course_name: cname,
     student_num: sNum
 }
 //lisätään olio taulukkoon
 courses.push(course)
}

function showAll(){
    //käydään läpi kaikki kurssit
    courses.forEach ( course => {
        let li = document.createElement("li");
        //lisätään kurssin tiedot 
        li.textContent = "Course " + course.course_name + " has " + 
        course.student_num + " students registered.";

        document.querySelector("ul").appendChild(li);
    })
}