//Function using a Global Variable
var A = 20;
function Add_numbers_1() {
    document.write(20 + A + "<br>");
}
function Add_numbers_2() {
    document.write(A + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");

//Function using a local variable
function Add_numbers_3() {
    var B = 20;
    document.write(20 + B + "<br>");
}
function Add_numbers_4() {
    document.write(B + 100);
}
Add_numbers_3();
Add_numbers_4();

document.write("<br>");

//Same local variable function written to find the error in the console log
//Function using a local variable
function Add_numbers_3() {
    var B = 20;
    console.log(20 + B);
}
function Add_numbers_4() {
    console.log(B + 100);
}
Add_numbers_3();
Add_numbers_4();

document.write("<br>");

//Get Date Function
function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting") .innerHTML = "Good Morning!";
    }
}

//My Date Function
function get_Hours() {
    if (new Date().getHours() > 18) {
        document.getElementById("Evening") .innerHTML = "Good Evening!";
    }
}

//If Else Function
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?") .innerHTML = Vote;
}

//My If Else Function to collect Social Security
function Social_Security_Function() {
    Old_Enough = document.getElementById("Old_Enough").value
    if (Old_Enough >= 62) {
        Collect = "Congratulations! You are old enough to collect Social Security!";
    }
    else {
        Collect = "Unfortunately, you are too young to collect Social Security.";
    }
    document.getElementById("Social_Security") .innerHTML = Collect
}

//Else If Statement to tell what time of day it is
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}