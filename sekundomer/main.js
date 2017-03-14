var startSec = 0;
var minutes = 0;
var hour = 0;
var timer;

setDisabledClearButton(true);


function setTimeHTML() {

    if(startSec < 10) {
        htmlSec = '0' + startSec;
    } else {
        htmlSec = startSec;
    }

    if(minutes < 10) {
        htmlMin = '0' + minutes;
    } else {
        htmlMin = minutes;
    }

    if(hour < 10) {
        htmlHour = '0' + hour;
    } else {
        htmlHour = hour;
    }

    document.getElementById('sec').innerHTML = htmlSec;
    document.getElementById('min').innerHTML = htmlMin;
    document.getElementById('hour').innerHTML = htmlHour;
}

function getSec() {
    
    startSec++;

    if(startSec > 59) {
        minutes ++;
        startSec = 0;
    }

    if(minutes > 59) {
        hour ++;
        minutes = 0;
    }

    setTimeHTML();
   
    timer = setTimeout("getSec()",1000);

}


function setDisabledClearButton(status) {
    document.getElementById('btnClear').disabled = status;
}


function startTimer() {
    getSec();
}

function stopTimer()
{
    clearTimeout(timer);
    setDisabledClearButton(false);
}

function clearTimer()
{
    startSec = 0;
    minutes = 0;
    hour = 0;

    setTimeHTML();    
    setDisabledClearButton(true);
}




