let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".side");
let menuStatus = false;

menu.style.display = "none";

function menuToggle() {
    if (menuStatus == false) {
        menu.style.display = "block";
        menuStatus = true;
    }
    else if (menuStatus == true) {
        menu.style.display = "none";
        menuStatus = false;
    }
}

menuBtn.addEventListener("click", menuToggle);