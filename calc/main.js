function in_array(value, array) 
{
    for(var i = 0; i < array.length; i++) 
    {
        if(array[i] == value) return true;
    }
    return false;
}


function resCacl(variable1, variable2, operation) {

	operationArr = ['sum', 'minus', 'multiply', 'division'];

	if(in_array(operation, operationArr)) {

		switch(operation) {
			case 'sum' :
				result = variable1 + variable2;
				break;
			case 'minus' :
				result = variable1 - variable2;
				break;
			case 'multiply' :
				result = variable1*variable2;
				break;
			case 'division' :
				result = variable1/variable2;
				break;
			default :
				result = "ERROR!!!";
		}
	} else {
		result = "Error operation name";
	}

	alert(result);
}

