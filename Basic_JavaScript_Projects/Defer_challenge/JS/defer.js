//Function that references an HTML element
function Display_Date() {                                               //Defining a function and naming it
    var date = "Today is the day after yesterday!"                      //Defining a variable and giving it a value
    var result = date.fontcolor("blue");                                //Using the fontcolor method on the string variable
    document.getElementById("Todays_Date") .innerHTML = result;         //Putting the value of result into HTML element with "Todays_Date" id
}