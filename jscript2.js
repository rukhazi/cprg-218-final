function showTime(){
    var date = new Date();
    var h = date.getHours(); //variable for the hours (12-11)
    var m = date.getMinutes(); //variable for the minutes (0-59)
    var s = date.getSeconds(); //variable for the seconds (0-59)
    var session = "AM"; //morning session
    
    if(h == 0){
        h = 12;
    }
    
    if(h >= 12){ //example: h=14 (or 2pm), h=14-12 -> h=2, it's pm
        h = h - 12;
        session = "PM"; //afternoon session, because it's greater than 12.
    }

    
    h = (h < 10) ? "0" + h : h; // how to get hours
    m = (m < 10) ? "0" + m : m; // how to get minutes
    s = (s < 10) ? "0" + s : s; // how to get seconds
    
    var time = h + ":" + m + ":" + s + " " + session; //this is the layout
    document.getElementById("clockdisplay").innerText = time;
    document.getElementById("clockdisplay").textContent = time;
    
    setTimeout(showTime, 2000);
}
showTime();