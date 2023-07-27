function myDigitalClock() {
    var d1 = new Date();
    let hours = d1.getHours(); // 0 - 23
    let minutes = d1.getMinutes(); // 0 - 59
    let seconds = d1.getSeconds(); // 0 - 59
    var zone = "AM";
    //Write the code here
    if (hours > 12) {
        hours = hours - 12;
        zone = "PM";
    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds + " " + zone;
    console.log(time);
    setTimeout(myDigitalClock, 1000);
}

myDigitalClock();
