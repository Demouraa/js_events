let btn = document.querySelector(".test-btn");
let form = document.querySelector(".test-form");
let formStatus = false;
let btnStatus = false;
let counter = 0;

//use the e parameter to prevent the default event.
function changeBtnText(e) {
    e.preventDefault();
    counter++;

    if (btnStatus === false) {
        btn.innerHTML = `YAY ${counter}`;
        btnStatus = true;
    }
    else if (btnStatus === true) {
        btn.innerHTML = `Click me to change me! ${counter}`;
        btnStatus = false;
    }
}

//use the e parameter to prevent the default event.
function stopFormSubmit(e) {
    e.preventDefault();
    counter++;

    if (formStatus === false) {
        document.querySelector("input").placeholder = `Uhuuuuu ${counter}`;
        formStatus = true;
    }
    else if (formStatus === true){
        document.querySelector("input").placeholder = `write here ${counter}`;
        formStatus = false;
    }

}


/*I can only use more than one function in the same html element and event if I use addEventListeners, or create a function with two other functions inside of it. The on click event handler doesn't work with more than one function, if i use more than one onclick event listener the js code will only execute the last onclick called*/
btn.addEventListener("click", changeBtnText);
btn.addEventListener("click", function() {
    btn.style.backgroundColor = "red";
});
form.addEventListener("click", stopFormSubmit);