//iOS inspo Calculator by Caj

//Global
const calculator = document.querySelector('.calculator'); 
const display = document.querySelector('.display');
const values = {
    sum: 0,
    currentValue: 0,
    strNum: "",
    activeOperator: "inactive",
    selectedOperator: "",
    usedEqual: 0,
}
//Functions
function add(input) {
    values.currentValue = input;
    values.sum += input;
    return values.sum;
}

function minus(input) {
    values.currentValue = input;
    values.sum -= input;
    return values.sum;
}

function multiply(input) {
    values.currentValue = input;
    values.sum *= input;
    return values.sum;
}

function divide(input) {
    values.currentValue = input;
    values.sum /= input;
    return values.sum;
}

function clear() {
    values.sum = 0;
    values.currentValue = 0;
    values.strNum = "";
    values.activeOperator = "inactive",
    values.selectedOperator = "",
    values.usedEqual = 0; 
    document.querySelector('.display').textContent = "0";
    return console.log('cleared')
}

 function operate(event) {
     switch(event.target.value) {
         //numbers
        case "0":
            if (display.textContent != "0") {
                values.strNum += "0";
                display.textContent = values.strNum;
                console.log(0);
            }
            if(values.activeOperator != "inactive") {
                values.strNum = "0";
                display.textContent = "0";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            break;
        case "1":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "1";
            display.textContent = values.strNum;
            console.log(1);
            break;
        case "2":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "2";
            display.textContent = values.strNum;
            console.log(2);
            break;
        case "3":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "3";
            display.textContent = values.strNum;
            console.log(3);
            break;
        case "4":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "4";
            display.textContent = values.strNum;
            console.log(4);
            break;
        case "5":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "5";
            display.textContent = values.strNum;
            console.log(5);
            break;
        case "6":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "6";
            display.textContent = values.strNum;
            console.log(6);
            break;
        case "7":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "7";
            display.textContent = values.strNum;
            console.log(7);
            break;
        case "8":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "8";
            display.textContent = values.strNum;
            console.log(8);
            break;
        case "9":
            if(values.activeOperator != "inactive") {
                values.strNum = "";
                values.activeOperator = "inactive";
            } 
            if(values.usedEqual > 0) {
                clear();
            }
            values.strNum += "9";
            display.textContent = values.strNum;
            console.log(9);
            break;

        //operators
        case "reset":
            clear();
            break;
        case "swap":
            console.log('swap');
            break;
        case "percentage":
            console.log('percentage');
            break;
        case "divide":
            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "divide";
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "divide";
                add(parseInt(values.strNum));
                console.log('divide');  
                break;
            }
        case "multiply":

            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "multiply";
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "multiply";
                add(parseInt(values.strNum));
                console.log('multiply');  
                break;
            }
        case "minus":
            if(values.currentValue == "0") {
                values.currentValue = values.sum
            }
            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "minus";
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "minus";
                add(parseInt(values.strNum));
                console.log('minus');  
                break;
            }
        case "plus":
            if(values.currentValue == "0") {
                values.currentValue = values.sum
            }
            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "plus";
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "plus";
                add(parseInt(values.strNum));
                console.log('plus');  
                break;
            }
        case "equal":
            if(values.currentValue == 0) {
                return;
            } else if (isNaN(values.currentValue) == true) {
               return display.textContent = "Error";
            }
            values.activeOperator = "active";
            if(values.selectedOperator === "plus") {
                if(values.usedEqual > 0) {
                    add(parseInt(values.currentValue));
                } else {
                    add(parseInt(values.strNum));
                }
            } else if(values.selectedOperator === "minus") {
                if(values.usedEqual > 0) {
                    minus(parseInt(values.currentValue));
                } else {
                    minus(parseInt(values.strNum));
                }
            } else if(values.selectedOperator === "multiply") {
                if(values.strNum == "0") {
                    return clear();
                }
                if(values.usedEqual > 0) {
                    multiply(parseInt(values.currentValue));
                } else {
                    multiply(parseInt(values.strNum));
                }
            } else if(values.selectedOperator === "divide") {
                if(values.usedEqual > 0) {
                    divide(parseInt(values.currentValue));
                } else {
                    divide(parseInt(values.strNum));
                }
            } 
                values.usedEqual += 1;
                values.strNum = '' + values.sum;
                display.textContent = values.strNum;
            console.log('equal');
            break;
        case "comma":
            console.log('comma');
            break;        
     }
}


calculator.addEventListener('click', operate);


//for operate, if button value is + then use add(input) vice versa
// for numbers, class numbers, make switch, if number.value = 1 then add + "1" string to variable 