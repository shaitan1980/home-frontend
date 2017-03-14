var persons = {};

var arrPersons = [];

// Общие функции

function getValueByElemID(id) {
    return document.getElementById(id).value;
}



// Программа

function addDataTable() {

    buildArrayPerson();

    sortableArrPers = sortArrPers(arrPersons);

    var dataTab = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    var tabTr = document.createElement('tr');

    for(var prop in persons) {
        tabTd = document.createElement('td');
        tabTd.innerHTML = persons[prop];
        tabTr.appendChild(tabTd);
    }
   
    dataTab.appendChild(tabTr);

    console.log(sortableArrPers);
}


function buildArrayPerson() {

    persons.lastName = getValueByElemID('inputLastName');
    persons.name = getValueByElemID('inputName');
    persons.age =  getValueByElemID('inputAge');
    persons.gender = getValueByElemID('inputGender');

    arrPersons.push(persons);

}


function sortArrPers(array) {
    var result;

    result = array.slice().sort(function(a, b) {
        return a.lastName > b.lastName ? 1 : -1;
    });

    return result;
}


