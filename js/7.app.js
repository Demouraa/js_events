let form = document.getElementById("myForm");
function average(e) {
    e.preventDefault();

    let value1 = Number(document.getElementById("n1").value);
    let value2 = Number(document.getElementById("n2").value);
    let value3 = Number(document.getElementById("n3").value);

    let avGrade = (value1 + value2 + value3) / 3;
    document.getElementById("resultado").innerHTML = avGrade.toFixed(2);
    console.log("form has been submitted");
}

form.addEventListener("submit", average);