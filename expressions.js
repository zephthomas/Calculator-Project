let total = 0;
let holder = "0";
let saveExpression = "";
const words = document.querySelector(".words");

function buttonClick(input) {
    if (isNaN(input)) {
        isExpression(input);
    } 
    else {
        isNumber(input);
    }
    if (holder.length >= 11) {
        words.innerText = holder.substring(0, 11);
    }
    else {
        words.innerText = holder;
    }
}

function isNumber(input) {
    if (holder === "0") {
        holder = input; 
    }
    else {
        holder += input;
    }
}

function doMath(input) {
    intInput = parseInt(holder);
    if (total === 0) {
        total = intInput;
    }
    else {
        calculateAnswer(intInput);
    }
    holder = "0";
    saveExpression = input;
}

function calculateAnswer(intInput) {    
    if (saveExpression === "+") {
        total += intInput;
    }
    else if (saveExpression === "-") {
        total -= intInput;
    }
    else if (saveExpression === "x") {
        total *= intInput;
    }
    else {
        if (intInput === 0) {
            total = NaN;
        }
        else {
            total /= intInput;
            }
        }
}

function isExpression(input) {
    switch (input) {
        case "C":
            total = 0;
            holder = "0";
            saveExpression = "";
            break;
        case "←":
            if (holder.length === 1) {
                holder = "0";
            }
            else {
                holder = holder.substring(0, holder.length - 1);
                  }
            break;
        case "=":
            if (saveExpression == null) {
                return;
            }
            else {
                calculateAnswer(parseInt(holder));
                holder = total.toString();
                total = 0;
                break;
            }
        case "+":
        case "-":
        case "x":
        case "÷":
            doMath(input);
            break;
    }
}
  
function init() {
    document.querySelector(".calculatorbuttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
    });
  }
  
init();