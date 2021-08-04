//Addition Operator Function
function addition_Function() {                                                     //Defining a function and naming it
    var addition = 2 + 2;                                                          //Defining a variable and giving it a value
    document.getElementById("Math_Addition") .innerHTML = "2 + 2 = " + addition;            //Putting the value of addition in HTML element wih "Math" id
}

//Subtraction Operator Function
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math_Subtraction") . innerHTML = "5 - 2 = " + subtraction;
}

//Multiplication Operator Function
function multiplication() {
    var multiply = 6 * 8;
    document.getElementById("Math_Multiply") .innerHTML = "6 x 8 = " + multiply;
}

//Division Operator Function
function division() {
    var divide = 48 / 6;
    document.getElementById("Math_Divide") .innerHTML = "48 / 6 = " + divide;
}

//Function with multiple operators
function multiple_operators() {
    var more_math = (3 + 5) * 15 / 3 - 4;
    document.getElementById("Math_More_Math") .innerHTML = "(3 + 5) x 15 &#247; 3 - 4 = " + more_math;
}

//Modulus Operator Function
function modulus_operator() {
    var modulus = 25 % 6;
    document.getElementById("Math_Modulus") .innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

//Negation Operator Function
function negation_operator() {
    var x = 10;
    document.getElementById("Math_Negation") .innerHTML = -x;
}

var y = 5;                                           //Assigning the variable of y the value of 5
y++;                                                 //Adding 1 to the variable y
document.write(y);                                   //Displays the result of y + 1

document.write("<br>");                              //Displays a line break on page for easier viewing
document.write("<br>");

var z = 5.25;                                        //Assigning the variable z a value of 5.25
z--;                                                 //Subracting 1 from the variable z
document.write(z);                                   //Displays the result of z - 1

document.write("<br>");
document.write("<br>");

window.alert(Math.random());                          //Displays a random number between 0-1 as an alert

window.alert(Math.random() * 100);                    //Displays a random number between 0-100 as an alert

var PI = Math.PI;                                     //Math object, returns the value of PI
document.write(PI);

document.write("<br>");
document.write("<br>");

var round = Math.round(6.7);                          //Math object method rounds 6.7 and returns 7
document.write(round);

document.write("<br>");
document.write("<br>");