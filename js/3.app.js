let count = 0;
document.querySelector("input").addEventListener("click", message);

document.querySelector("input").addEventListener("click", aMessage);

document.querySelector("input").addEventListener("click", function () {
    count++
    document.querySelector("p").innerHTML = `The Result is ${count}`;
});

function message() {
    alert("Hello World");
};

function aMessage () {
    alert("Hello Second");
};
//You can´t remove a eventListener if the function was defined inside the addEventListener method.
document.querySelector("input").removeEventListener("click", aMessage);
document.querySelector("input").removeEventListener("click", message);