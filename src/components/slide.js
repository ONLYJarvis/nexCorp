let sliderButt = document.getElementById("button-change");
sliderButt.addEventListener("click", slide);

let delka = 0;
let transform = document.getElementById("slider");

function slide(){
    if(delka > -400){
        delka = delka - 100;
        transform.style.transform = "translateX(" + delka + "vw)";

    }
    else{
        delka = 0;
        transform.style.transform = "translateX(" + delka + "vw)";

    }
    

}