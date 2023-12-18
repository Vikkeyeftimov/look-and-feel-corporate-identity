let button = document.querySelector("#weerver");
let slide = document.querySelector(".slide");
let sunny = document.querySelector(".sunny");
// let mooiweer = document.querySelector(".mooiweer")

button.addEventListener('click', veranderen)
function veranderen(){
    sunny.classList.toggle("mooiweer")
    slide.classList.toggle("mooiweer")
}

// console.log(slide);

// button.addEventListener("cl", function(){
//     Element.classlist.toggle("sunny")
// })