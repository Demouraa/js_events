//the onclick event manipulator is the wrong way to do it.
//document.querySelector("input").onclick = function(){alert("Hello World")};

//addEventListener is the right way to do it.
document.querySelector("input").addEventListener("click", function(){
    alert("Hello World");
});

//addEventListeners are faster and lighter than the onclick event manipulator.