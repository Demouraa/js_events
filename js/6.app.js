let listItem = document.querySelectorAll('li');
let check = [false, false, false, false];

function first() {
    if (check[0] === false){
        listItem[3].style.color = "red";
        check[0] = true;
    }
    else if (check[0] === true){
        listItem[3].style.color = "black";
        check[0] = false;
    }
}

function second() {
    if (check[1] === false){
        listItem[2].style.color = "yellow";
        check[1] = true;
    }
    else if (check[1] === true){
        listItem[2].style.color = "black";
        check[1] = false;
    }
}

function third() {
    if (check[2] === false){
        listItem[0].style.color = "orange";
        check[2] = true;
    }
    else if (check[2] === true){
        listItem[0].style.color = "black";
        check[2] = false;
    }
}

function fourth() {
    if (check[3] === false){
        listItem[1].style.color = "blue";
        check[3] = true;
    }
    else if (check[3] === true){
        listItem[1].style.color = "black";
        check[3] = false;
    }
}

listItem[0].addEventListener('click', first);
listItem[1].addEventListener('click', second);
listItem[2].addEventListener('click', third);
listItem[3].addEventListener('click', fourth);