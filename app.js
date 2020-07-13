var milSec = 0;
var sec = 0;
var min = 0;
function stopWatch(){
    if(milSec <= 100){
    milSec++;
    miliseconds.innerHTML = milSec;
    }
    
    else if(milSec >=100){
        milSec = 0;
        sec++;
    seconds.innerHTML = sec;
    }
    if(sec >= 59){
        sec = 0;
        min++;
    minutes.innerHTML = min;
    }
}
function start(){
    interval = setInterval(stopWatch,10);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
}
function pause(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;

}
function reset(){
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = false;
    document.getElementById("reset").disabled = false;
    clearInterval(interval);
    milSec = 0;
    sec = 0;
    min = 0;
    miliseconds.innerHTML = milSec;
    seconds.innerHTML = sec;
    minutes.innerHTML = min;
}