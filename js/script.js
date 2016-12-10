function nine() {
	document.getElementById("output").value += "9";
}
function eight() {
	document.getElementById("output").value += "8";
}
function seven() {
	document.getElementById("output").value += "7";
}
function six() {
	document.getElementById("output").value += "6";
}
function five() {
	document.getElementById("output").value += "5";
}
function four() {
	document.getElementById("output").value += "4";
}
function three() {
	document.getElementById("output").value += "3";
}
function two() {
	document.getElementById("output").value += "2";
}
function one() {
	document.getElementById("output").value += "1";
}
function zero() {
	document.getElementById("output").value += "0";
}
function decimal() {
	document.getElementById("output").value += ".";
}
function divide() {
	document.getElementById("output").value += "/";
}
function multiply() {
	document.getElementById("output").value += "*";
}
function minus() {
	document.getElementById("output").value += "-";
}
function plus() {
	document.getElementById("output").value += "+";
}
function cleara() {
	document.getElementById("output").value = '';
}


function equals() {
	var input = (document.getElementById("output").value);
	var result = eval (input);
	document.getElementById("output").value = input + " = " + result;
}

