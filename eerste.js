let button = document.querySelector("#weerver");
let slide = document.querySelector(".slide");
let sunny = document.querySelector(".sunny");


button.addEventListener('click', veranderen)
function veranderen(){
    sunny.classList.toggle("mooiweer")
    slide.classList.toggle("mooiweer") 
    if(this.innerHTML === 'Zet zonnetje aan!') {
        this.innerHTML = 'Laat het regenen!'
    }  else {
        this.innerHTML = 'Zet zonnetje aan!' 
    }
}

