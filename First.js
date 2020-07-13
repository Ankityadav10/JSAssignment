var today = new Date();
var day = today.getDay();

// Arrays of Days
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
document.write("Today is : " + daylist[day]);
document.write("<br/>");

// get hour value. 
var hours = today.getHours();
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
var minutes = today.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
var myTime = hours + " " + ampm + " : " + minutes +
    " : " + today.getMilliseconds();
document.write("\tCurrent time is : " + myTime);