let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function displayTime (){
    let date = new Date();

    //getting hour, min and second from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    //Calculation of Hour Needle

    //12 hour = 360deg
    //1 hour = 360/12 = 30deg
    //hh hours = 30hh + mm/2
    let hourRotation = 30*hh + mm/2;

    //Calculation of Minute Needle

    //60 min = 360deg
    //1 min = 360/60 = 6deg
    //mm min = 6*mm
    let minRotation = 6*mm;

    //Calculation of Minute Needle

    //60 sec = 360deg
    //1 sec = 360/60 = 6deg
    //ss sec = 6*ss
    let secRotation = 6*ss;

    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;

}
setInterval(displayTime, 1000);