
var cont = document.getElementById('container');

function createDiv(myNameClass) {
	var elemDiv = document.createElement('div');
	elemDiv.className = "cell " + myNameClass;

	return elemDiv;
}


var indexRow = 1;

for(indexRow = 1; indexRow<=8; indexRow++) {

	for (var rowElem = 1; rowElem<9; rowElem++) {

		if(indexRow % 2 != 0 && rowElem % 2 != 0) {
			myNameClass = "white";
		} else if (indexRow % 2 != 0 && rowElem % 2 == 0) {
			myNameClass = "black";
		} else if(indexRow % 2 == 0 && rowElem % 2 != 0) {
			myNameClass = "black";
		} else if(indexRow % 2 == 0 && rowElem % 2 == 0) {
			myNameClass = "white";
		}

		elemDiv = createDiv(myNameClass);
		cont.appendChild(elemDiv);
	}

}


