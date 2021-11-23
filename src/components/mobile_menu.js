let menu_icon = document.getElementById("menu-icon")
menu_icon.addEventListener("click", appear)

let menu_components = document.getElementById("menu-components")

function appear(){

    menu_components.style.transform = "translate(0vw, -52px)";
    menu_components.style.opacity = "0.95";

    

}

let cross_icon = document.getElementById("cross-icon")
cross_icon.addEventListener("click", disappear)


function disappear(){

    menu_components.style.transform = "translate(-100vw, -52px)";
    menu_components.style.opacity = "0";

    

}
