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

function onLoadCounter() {
    let i = 100;
    let counter = setInterval(() => {
        display.textContent = i;
        i -= 1;
        if(i == -1) {
            clearInterval(counter);
        }
    }, 1)
}

function checkActive() {
    if(values.activeOperator != "inactive" && 
    values.selectedOperator == "plus") {
        document.querySelector('.plus').style.cssText = "background-color: white; color: #f1a33c;" 
    } else {
        document.querySelector('.plus').style.cssText = "background-color: #f1a33c; color: white;" 
    }
    if(values.activeOperator != "inactive" && 
    values.selectedOperator == "minus") {
        document.querySelector('.minus').style.cssText = "background-color: white; color: #f1a33c;" 
    } else {
        document.querySelector('.minus').style.cssText = "background-color: #f1a33c; color: white;" 
    }
    if(values.activeOperator != "inactive" && 
    values.selectedOperator == "multiply") {
        document.querySelector('.multiply').style.cssText = "background-color: white; color: #f1a33c;" 
    } else {
        document.querySelector('.multiply').style.cssText = "background-color: #f1a33c; color: white;" 
    }
    if(values.activeOperator != "inactive" && 
    values.selectedOperator == "divide") {
        document.querySelector('.divide').style.cssText = "background-color: white; color: #f1a33c;" 
    } else {
        document.querySelector('.divide').style.cssText = "background-color: #f1a33c; color: white;" 
    }
}
function clearActive() {
    document.querySelector('.plus').style.cssText = "background-color: #f1a33c; color: white;"
    document.querySelector('.minus').style.cssText = "background-color: #f1a33c; color: white;" 
    document.querySelector('.divide').style.cssText = "background-color: #f1a33c; color: white;"
    document.querySelector('.multiply').style.cssText = "background-color: #f1a33c; color: white;"  
}

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
    checkActive();
    return console.log('cleared')
}

 function operate(event) {
     switch(event.target.value) {
         //numbers
        case "0":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "1":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
            }
        case "2":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "3":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "4":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "5":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "6":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "7":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "8":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }
        case "9":
            if(values.strNum.length >= 14) {
                display.textContent = "Too big";
                break;
            } else {
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
        }

        //operators
        case "reset":
            clear();
            break;
        case "swap":
            if(values.strNum.split('').includes('-') == false) {
                values.strNum = "-" + values.strNum;
                display.textContent = values.strNum;
                
            } else {
                values.strNum = values.strNum.replace(/\-/g, '');
                display.textContent = values.strNum;
            }
            console.log('swap');
            break;
        case "square":
                values.strNum = "" + Math.round(Math.sqrt(values.strNum) * 1000) / 1000;
                display.textContent = values.strNum;
            console.log('square');
            break;
        case "divide":
            if(values.strNum === "") {
                return;
            }
            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "divide";
                checkActive();
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "divide";
                checkActive();
                if(values.strNum.split('').includes('.')) {
                    add(parseFloat(values.strNum));
                    console.log('divide');  
                    break;
                } else {
                    add(parseInt(values.strNum));
                    console.log('divide');  
                    break;
                }
            }
        case "multiply":
            if(values.strNum === "") {
                return;
            }
            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "multiply";
                checkActive();
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "multiply";
                checkActive();
                if(values.strNum.split('').includes('.')) {
                    add(parseFloat(values.strNum));
                    console.log('multiply');  
                    break;
                } else {
                    add(parseInt(values.strNum));
                    console.log('multiply');  
                    break;
                }
            }
        case "minus":
            if(values.strNum === "") {
                return;
            }
            if(values.currentValue == "0") {
                values.currentValue = values.sum
            }
            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "minus";
                checkActive()
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "minus";
                checkActive()
                if(values.strNum.split('').includes('.')) {
                    add(parseFloat(values.strNum));
                    console.log('minus');  
                    break;
                } else {
                    add(parseInt(values.strNum));
                    console.log('minus');  
                    break;
                }
            }
        case "plus":
            if(values.strNum === "") {
                return;
            }
            if(values.currentValue == "0") {
                values.currentValue = values.sum
            }
            if(values.usedEqual > 0) {
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "plus";
                checkActive();
                break;
            } else { 
                values.usedEqual = 0;
                values.activeOperator = "active";
                values.selectedOperator = "plus";
                checkActive();
                if(values.strNum.split('').includes('.')) {
                    add(parseFloat(values.strNum));
                    console.log('plus');  
                    break;
                } else {
                    add(parseInt(values.strNum));
                    console.log('plus');  
                    break;
                }
            }
        case "equal":
            if(values.currentValue == 0) {
                return;
            } else if (isNaN(values.currentValue) == true) {
               return display.textContent = "Error";
            }
            values.activeOperator = "active";
            clearActive();
            if(values.selectedOperator === "plus") {
                if(values.usedEqual > 0) {
                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)) {
                        add(parseFloat(values.currentValue));
                    } else {
                        add(parseInt(values.currentValue));
                    }
                } else {
                    if(values.strNum.split('').includes('.')) {
                        add(parseFloat(values.strNum));
                    } else {
                        add(parseInt(values.strNum));
                    }
                }
            } else if(values.selectedOperator === "minus") {
                if(values.usedEqual > 0) {
                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)) {
                        minus(parseFloat(values.currentValue));
                    } else {
                        minus(parseInt(values.currentValue));
                    }
                } else {
                    if(values.strNum.split('').includes('.')) {
                        minus(parseFloat(values.strNum));
                    } else {
                        minus(parseInt(values.strNum));
                    }
                }
            } else if(values.selectedOperator === "multiply") {
                if(values.strNum == "0") {
                    return clear();
                }
                if(values.usedEqual > 0) {
                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)) {
                        multiply(parseFloat(values.currentValue));
                    } else {
                        multiply(parseInt(values.currentValue));
                    }
                } else {
                    if(values.strNum.split('').includes('.')) {
                        multiply(parseFloat(values.strNum));
                    } else {
                        multiply(parseInt(values.strNum));
                    }
                }
            } else if(values.selectedOperator === "divide") {
                if(values.usedEqual > 0) {
                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)){
                        divide(parseFloat(values.currentValue));
                    } else {
                        divide(parseInt(values.currentValue));
                    }
                } else {
                    if(values.strNum.split('').includes('.')) {
                        divide(parseFloat(values.strNum));
                    } else {
                        divide(parseInt(values.strNum));
                    }
                }
            } 
                values.usedEqual += 1;
                values.strNum = '' + values.sum;
                display.textContent = values.strNum;
                //Check length
                if(values.strNum.length > 3) {
                    values.strNum = '' + Math.round((values.strNum) * 100) / 100;
                    display.textContent = values.strNum;
                }
                if(('' + values.sum).split('').length >= 14) {
                    display.textContent = "Too big";
                }
            console.log('equal');
            break;
        case "comma":
            if(!values.strNum.split('').includes('.') && values.activeOperator == "inactive") {
                values.strNum = values.strNum + '.';
                display.textContent = values.strNum;
                console.log('not inc');
            }
            // } else if (!values.strNum.split('').includes('.') && values.activeOperator == "active") {
            //     values.strNum = "0" + ".";
            //     display.textContent = values.strNum;
            // }
            console.log('comma');
            break;        
     }
}


calculator.addEventListener('click', operate);

// function operateKey(event) {
//     switch(event.keyCode) {
//         //numbers
//        case 48:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if (display.textContent != "0") {
//                values.strNum += "0";
//                display.textContent = values.strNum;
//                console.log(0);
//            }
//            if(values.activeOperator != "inactive") {
//                values.strNum = "0";
//                display.textContent = "0";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            break;
//        }
//        case 49:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "1";
//            display.textContent = values.strNum;
//            console.log(1);
//            break;
//            }
//        case 50:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "2";
//            display.textContent = values.strNum;
//            console.log(2);
//            break;
//        }
//        case 51:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "3";
//            display.textContent = values.strNum;
//            console.log(3);
//            break;
//        }
//        case 52:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "4";
//            display.textContent = values.strNum;
//            console.log(4);
//            break;
//        }
//        case 53:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "5";
//            display.textContent = values.strNum;
//            console.log(5);
//            break;
//        }
//        case 54:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "6";
//            display.textContent = values.strNum;
//            console.log(6);
//            break;
//        }
//        case 55:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "7";
//            display.textContent = values.strNum;
//            console.log(7);
//            break;
//        }
//        case 56:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "8";
//            display.textContent = values.strNum;
//            console.log(8);
//            break;
//        }
//        case 57:
//            if(values.strNum.length >= 14) {
//                display.textContent = "Too big";
//                break;
//            } else {
//            if(values.activeOperator != "inactive") {
//                values.strNum = "";
//                values.activeOperator = "inactive";
//            } 
//            if(values.usedEqual > 0) {
//                clear();
//            }
//            values.strNum += "9";
//            display.textContent = values.strNum;
//            console.log(9);
//            break;
//        }

//        //operators
//        case "reset":
//            clear();
//            break;
//        case "swap":
//            if(values.strNum.split('').includes('-') == false) {
//                values.strNum = "-" + values.strNum;
//                display.textContent = values.strNum;
               
//            } else {
//                values.strNum = values.strNum.replace(/\-/g, '');
//                display.textContent = values.strNum;
//            }
//            console.log('swap');
//            break;
//        case "square":
//                values.strNum = Math.round(Math.sqrt(values.strNum) * 1000) / 1000;
//                display.textContent = values.strNum;
//            console.log('square');
//            break;
//        case "divide":
//            if(values.usedEqual > 0) {
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "divide";
//                break;
//            } else { 
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "divide";
//                if(values.strNum.split('').includes('.')) {
//                    add(parseFloat(values.strNum));
//                    console.log('plus');  
//                    break;
//                } else {
//                    add(parseInt(values.strNum));
//                    console.log('plus');  
//                    break;
//                }
//            }
//        case "multiply":

//            if(values.usedEqual > 0) {
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "multiply";
//                break;
//            } else { 
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "multiply";
//                if(values.strNum.split('').includes('.')) {
//                    add(parseFloat(values.strNum));
//                    console.log('plus');  
//                    break;
//                } else {
//                    add(parseInt(values.strNum));
//                    console.log('plus');  
//                    break;
//                }
//            }
//        case 189:
//            if(values.currentValue == "0") {
//                values.currentValue = values.sum
//            }
//            if(values.usedEqual > 0) {
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "minus";
//                break;
//            } else { 
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "minus";
//                if(values.strNum.split('').includes('.')) {
//                    add(parseFloat(values.strNum));
//                    console.log('plus');  
//                    break;
//                } else {
//                    add(parseInt(values.strNum));
//                    console.log('minus');  
//                    break;
//                }
//            }
//        case 187:
//            if(values.currentValue == "0") {
//                values.currentValue = values.sum
//            }
//            if(values.usedEqual > 0) {
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "plus";
//                break;
//            } else { 
//                values.usedEqual = 0;
//                values.activeOperator = "active";
//                values.selectedOperator = "plus";
//                if(values.strNum.split('').includes('.')) {
//                    add(parseFloat(values.strNum));
//                    console.log('plus');  
//                    break;
//                } else {
//                    add(parseInt(values.strNum));
//                    console.log('plus');  
//                    break;
//                }
//            }
//        case 13:
//            if(values.currentValue == 0) {
//                return;
//            } else if (isNaN(values.currentValue) == true) {
//               return display.textContent = "Error";
//            }
//            values.activeOperator = "active";
//            if(values.selectedOperator === "plus") {
//                if(values.usedEqual > 0) {
//                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)) {
//                        add(parseFloat(values.currentValue));
//                    } else {
//                        add(parseInt(values.currentValue));
//                    }
//                } else {
//                    if(values.strNum.split('').includes('.')) {
//                        add(parseFloat(values.strNum));
//                    } else {
//                        add(parseInt(values.strNum));
//                    }
//                }
//            } else if(values.selectedOperator === "minus") {
//                if(values.usedEqual > 0) {
//                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)) {
//                        minus(parseFloat(values.currentValue));
//                    } else {
//                        minus(parseInt(values.currentValue));
//                    }
//                } else {
//                    if(values.strNum.split('').includes('.')) {
//                        minus(parseFloat(values.strNum));
//                    } else {
//                        minus(parseInt(values.strNum));
//                    }
//                }
//            } else if(values.selectedOperator === "multiply") {
//                if(values.strNum == "0") {
//                    return clear();
//                }
//                if(values.usedEqual > 0) {
//                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)) {
//                        multiply(parseFloat(values.currentValue));
//                    } else {
//                        multiply(parseInt(values.currentValue));
//                    }
//                } else {
//                    if(values.strNum.split('').includes('.')) {
//                        multiply(parseFloat(values.strNum));
//                    } else {
//                        multiply(parseInt(values.strNum));
//                    }
//                }
//            } else if(values.selectedOperator === "divide") {
//                if(values.usedEqual > 0) {
//                    if(values.strNum.split('').includes('.') || (('' + values.currentValue).split('').includes('.') == true)){
//                        divide(parseFloat(values.currentValue));
//                    } else {
//                        divide(parseInt(values.currentValue));
//                    }
//                } else {
//                    if(values.strNum.split('').includes('.')) {
//                        divide(parseFloat(values.strNum));
//                    } else {
//                        divide(parseInt(values.strNum));
//                    }
//                }
//            } 
//                values.usedEqual += 1;
//                values.strNum = '' + values.sum;
//                display.textContent = values.strNum;
//                //Check length
//                if(values.strNum.length > 3) {
//                    values.strNum = '' + Math.round((values.strNum) * 100) / 100;
//                    display.textContent = values.strNum;
//                }
//                if(('' + values.sum).split('').length >= 14) {
//                    display.textContent = "Too big";
//                }
//            console.log('equal');
//            break;
//        case "comma":
//            if(!values.strNum.split('').includes('.') && values.activeOperator == "inactive") {
//                values.strNum = values.strNum + '.';
//                display.textContent = values.strNum;
//                console.log('not inc');
//            }
//            // } else if (!values.strNum.split('').includes('.') && values.activeOperator == "active") {
//            //     values.strNum = "0" + ".";
//            //     display.textContent = values.strNum;
//            // }
//            console.log('comma');
//            break;        
//     }
// }

// window.addEventListener('keydown', operateKey)


