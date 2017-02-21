//Функция array reverse наоборот 

var arr = ['one', 'two', 'three'];

function myArrayReverse(arr, newArray=[]) {
	arr.forEach(function(item, i, array){
		newArray.unshift(item);
	});

	return newArray;
}

console.log(myArrayReverse(arr));
