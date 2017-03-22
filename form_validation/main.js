var defaultBorderColor = '#ccc';
var errBorderColor = 'darkred';

function emailValidate(email) {
    res = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    if (!res) {
        return false;
    }

    return true;
}

function phoneValidate(phone) {
    res = phone.match(/^((\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    if (!res) {
        return false;
    }

    return true;
}

function nameValidate(name) {
    res = name.match(/^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/);
    if (!res) {
        return false;
    }

    return true;
}

function ageValidate(age) {
    res = age.match(/^\d+$/);
    if (!res) {
        return false;
    }

    return true;
}

function coloredBorder(id, color) {
    var elem = document.getElementById(id);
    elem.style.borderColor = color;
}

function formValidate() {

    var FormRequest = {
        inputEmail: document.getElementById('InputEmail').value,
        inputPhone: document.getElementById('InputPhone').value,
        inputName: document.getElementById('InputName').value,
        inputAge: document.getElementById('InputAge').value,
    }

    if (!emailValidate(FormRequest.inputEmail)) {
        document.getElementById('errEmail').innerHTML = "Email не введен или введен с ошибками";
        coloredBorder('InputEmail', errBorderColor);
    } else {
        document.getElementById('errEmail').innerHTML = "";
        coloredBorder('InputEmail', defaultBorderColor);
    }


    if (!phoneValidate(FormRequest.inputPhone)) {
        document.getElementById('errPhone').innerHTML = "Номер телефона не введен или введен с ошибками";
        coloredBorder('InputPhone', errBorderColor);
    } else {
        document.getElementById('errPhone').innerHTML = "";
        coloredBorder('InputPhone', defaultBorderColor);
    }

    if (!nameValidate(FormRequest.inputName)) {
        document.getElementById('errName').innerHTML = "Имя не введено или введено с ошибками";
        coloredBorder('InputName', errBorderColor);
    } else {
        document.getElementById('errName').innerHTML = "";
        coloredBorder('InputName', defaultBorderColor);
    }

    if (!ageValidate(FormRequest.inputAge)) {
        document.getElementById('errAge').innerHTML = "Возраст не введен или введен с ошибками";
        coloredBorder('InputAge', errBorderColor);
    } else if (FormRequest.inputAge < 18 || FormRequest.inputAge > 100) {
        document.getElementById('errAge').innerHTML = "Допустим возраст с 18 до 100 лет";
        coloredBorder('InputAge', errBorderColor);
    } else {
        document.getElementById('errAge').innerHTML = "";
        coloredBorder('InputAge', defaultBorderColor);
    }

}