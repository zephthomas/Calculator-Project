
function myFunction() {
    var number = 0;
    var savenumber = 0;
    var saveexpression = "";
    document.getElementById("value").innerHTML = number;

    const equals = document.querySelector('.equals');
    equals.addEventListener('click', function () {
    if (saveexpression == "add") {number = number + savenumber}
    else if (saveexpression == "minus") {number = savenumber - number}
    else if (saveexpression == "multiply") {number = savenumber * number}
    else if (saveexpression == "divide") {number = savenumber / number};
    saveexpression = ""
    savenumber = 0;
    document.getElementById("value").innerHTML = number;
    });

    const add = document.querySelector('.plus');
    add.addEventListener('click', function () {
    savenumber = savenumber + number;
    number = 0;
    saveexpression = "add"
    document.getElementById("value").innerHTML = number;
    });

    const minus = document.querySelector('.minus');
    minus.addEventListener('click', function () {
    savenumber = savenumber + number;
    number = 0;
    saveexpression = "minus"
    document.getElementById("value").innerHTML = number;
    });

    const divide = document.querySelector('.divide');
    divide.addEventListener('click', function () {
    savenumber = savenumber + number;
    number = 0;
    saveexpression = "divide"
    document.getElementById("value").innerHTML = number;
    });

    const multiply = document.querySelector('.multiply');
    multiply.addEventListener('click', function () {
    savenumber = savenumber + number;
    number = 0;
    saveexpression = "multiply"
    document.getElementById("value").innerHTML = number;
    });

    const reset = document.querySelector('.reset');
    reset.addEventListener('click', function () {
    number = 0;
    savenumber = 0;
    saveexpression = "";
    document.getElementById("value").innerHTML = number;
    });

    const backspace = document.querySelector('.backspace');
    backspace.addEventListener('click', function () {
    number = Math.floor(number/10);
    document.getElementById("value").innerHTML = number;
    });

    const addone = document.querySelector('.one');
    addone.addEventListener('click', function () {
    number = number*10 + 1;
    document.getElementById("value").innerHTML = number;
    });

    const addtwo = document.querySelector('.two');
    addtwo.addEventListener('click', function () {
    number = number*10 + 2;
    document.getElementById("value").innerHTML = number;
    });

    const addthree = document.querySelector('.three');
    addthree.addEventListener('click', function () {
    number = number*10 + 3;
    document.getElementById("value").innerHTML = number;
    });

    const addfour = document.querySelector('.four');
    addfour.addEventListener('click', function () {
    number = number*10 + 4;
    document.getElementById("value").innerHTML = number;
    });

    const addfive = document.querySelector('.five');
    addfive.addEventListener('click', function () {
    number = number*10 + 5;
    document.getElementById("value").innerHTML = number;
    });

    const addsix = document.querySelector('.six');
    addsix.addEventListener('click', function () {
    number = number*10 + 6;
    document.getElementById("value").innerHTML = number;
    });

    const addseven = document.querySelector('.seven');
    addseven.addEventListener('click', function () {
    number = number*10 + 7;
    document.getElementById("value").innerHTML = number;
    });

    const addeight = document.querySelector('.eight');
    addeight.addEventListener('click', function () {
    number = number*10 + 8;
    document.getElementById("value").innerHTML = number;
    });

    const addnine = document.querySelector('.nine');
    addnine.addEventListener('click', function () {
    number = number*10 + 9;
    document.getElementById("value").innerHTML = number;
    });

    const addzero = document.querySelector('.zero');
    addzero.addEventListener('click', function () {
    number = number*10;
    document.getElementById("value").innerHTML = number;
    });

}
