//Displays "string"
document.write(typeof "family");

document.write("<br>");

//Displays the string "100" with the number 100 added to the end of the string
document.write("100" + 100);

document.write("<br>");

//Displays "NaN" because zero can't be divided by zero
function display_NaN() {
    document.getElementById("NaN") .innerHTML = 0/0;
}

//Using isNaN function to display "true" because a string is not a number
function display_true() {
    document.getElementById("true") .innerHTML = isNaN("Is this a number?");
}

//Using isNaN fuction to display "false" because a the variable is a number
function display_false() {
    document.getElementById("false") .innerHTML = isNaN("2");
}

//Displays "Infinity" because the number is larger than JavaScript's largest number
document.write(2E310);

document.write("<br>");

//Displays "-Infinity" because the number is smaller than JavaScript's smallest number
document.write(-3E310);

document.write("<br>");

//Using Boolean logic to display "true" because 5 is greater than or equal to 4
document.write(5 >= 4);

document.write("<br>");

//Using Boolean logic to display "false" because 12 is not less than 8
document.write(12 < 8);

//Displays the result of a math operation in the browser console
console.log(5 + 5);

//Using Boolean logic to display "false" in the broswer console
console.log(200 <= 180);

document.write("<br>");

//Using double equal signs to display "true"
document.write(5 == 5);

document.write("<br>");

//Using double equal sign to display "false"
document.write(5 == 6);

document.write("<br>")

//Using triple equal signs to return "true" by matching data type and value
A = "Dad";
B = "Dad";
document.write(A === B);

document.write("<br>")

//Using triple equal signs to return "false" by writing different data types and different values
C = "Hello"
D = 4
document.write(C === D);

document.write("<br>");

//Using triple equal signs to return "false" by writing different data type with the same value
E = "20"
F = 20
document.write(E === F);

document.write("<br>")

//Using triple equal signs to return "false" by writing the same data type but with different values
G = 5
H = 7
document.write(G === H);

document.write("<br>");

//Using the AND operator to display "true"
document.write(5 > 4 && 10 > 4);

document.write("<br>");

//Using the AND operator to display "false"
document.write(5 < 4 && 10 > 4);

document.write("<br>");

//Using the OR operator to display "true"
document.write(5 < 4 || 10 > 4);

document.write("<br>")

//Using the OR operator to display "false"
document.write(5 < 4 || 10 < 4);

//Using the NOT operator to display "false"
function NOT_Function_false() {
    document.getElementById("NOT_False") .innerHTML = !(20 > 15);
}

//Using the NOT operator to display "true"
function NOT_Function_true() {
    document.getElementById("NOT_True") .innerHTML = !(20 < 15);
}