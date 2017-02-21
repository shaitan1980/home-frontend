
function calcSum(variable1, variable2) {
    return variable1 + variable2;
}

function calcMinus(variable1, variable2) {
    return variable1 - variable2;
}

function calcMultiply(variable1, variable2) {
    return variable1 * variable2;
}

function calcDivision(variable1, variable2) {
    if(variable2 == 0) {
        return "Error: недопустимая операция, делить на 0 нельзя";
    }

    return variable1 / variable2;
}


function resCacl(variable1, variable2, operation) {

        switch(operation) {
            case 'sum' :
                result = calcSum(variable1, variable2);
                break;
            case 'minus' :
                result = calcMinus(variable1, variable2);
                break;
            case 'multiply' :
                result = calcMultiply(variable1, variable2);
                break;
            case 'division' :
                result = calcDivision(variable1, variable2);
                break;
            default :
                result = "Error operation name";
        }

    return result;
}


function resultIt() {

    var calcForm = document.getElementById('myForm'),
        variable1 = Number(calcForm.variable1.value),
        variable2 = Number(calcForm.variable2.value),
        sOperation = calcForm.selectOperation,
        operation = sOperation.options[sOperation.selectedIndex].value,
        divRes = document.getElementById('result');

    divRes.innerHTML = resCacl(variable1, variable2, operation);
    
}


