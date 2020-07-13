
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

dd = dd < 10 ? '0' + dd : dd;

mm = mm < 10 ? '0' + mm : mm;

today = mm + '-' + dd + '-' + yyyy;
document.write("mm-dd-yyyy : " + today);
document.write("<br/>");

today = mm + '/' + dd + '/' + yyyy;
document.write("mm/dd/yyyy : " + today);
document.write("<br/>");

today = dd + '-' + mm + '-' + yyyy;
document.write("dd-mm-yyyy : " + today);
document.write("<br/>");

today = dd + '/' + mm + '/' + yyyy;
document.write("dd/mm/yyyy : " + today);