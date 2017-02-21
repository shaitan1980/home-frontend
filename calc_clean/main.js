var myCalculator = {
    variable1: 0,
    variable2: 0,
    operation: 'sum',

    fSum: function() {
        return this.variable1 + this.variable2;
    },

    fMinus: function() {
        return this.variable1 - this.variable2;
    },

    fMultiply: function() {
        return this.variable1 * this.variable2;
    },

    fDivision: function() {
        if(this.variable2 == 0) {
            return "Error: недопустимая операция, делить на 0 нельзя";
        }

        return this.variable1 / this.variable2;
    }

};


function resCacl() {

    switch(myCalculator.operation) {
        case 'sum' :
            result = myCalculator.fSum();
            break;
        case 'minus' :
            result = myCalculator.fMinus();
            break;
        case 'multiply' :
            result = myCalculator.fMultiply();
            break;
        case 'division' :
            result = myCalculator.fDivision();
            break;
        default :
            result = "Error operation name";
    }

    return result;
}


function resultIt() {

    var calcForm = document.getElementById('myForm'),
        sOperation = calcForm.selectOperation,
        divRes = document.getElementById('result');

    myCalculator.variable1 = Number(calcForm.variable1.value);
    myCalculator.variable2 = Number(calcForm.variable2.value);
    myCalculator.operation = sOperation.options[sOperation.selectedIndex].value;

    divRes.innerHTML = resCacl();
    
}


