function displaytime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";
    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (hours > 12) {
        h = h - 12;
        session = "PM"
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;

    }
    document.getElementById("Digi_Clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + session;
    setTimeout(displaytime, 1000); 
    document.getElementById("today_Date").innerHTML = day + "-" + month + "-" + year;
}
window.onload=function(){
displaytime();
}