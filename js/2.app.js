let count = 0;
document.querySelector("input").addEventListener("click", function () {
    alert("Hello World");
});

document.querySelector("input").addEventListener("click", function () {
    alert("Hello Second");
});

document.querySelector("input").addEventListener("click", function () {
    count++
    document.querySelector("p").innerHTML = `The Result is ${count}`;
});

//.innerHTML  changes de inner HTML of the selected element class or id.
