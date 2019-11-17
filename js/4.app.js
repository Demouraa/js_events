let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".side");
let menuStatus = false;

menu.style.display = "none";

function menuToggle() {
    if (menuStatus == false) {
        menu.style.display = "block";
        menuBtn.style.width = "40%";
        menuStatus = true;
    }
    else if (menuStatus == true) {
        menu.style.display = "none";
        menuBtn.style.width = "20%";
        menuStatus = false;
    }
}

menuBtn.addEventListener("click", menuToggle);