function Display_Date() {                                               //Defining a function and naming it
    var date = "Today is the day after yesterday!"                      //Defining a variable and giving it a value
    var result = date.fontcolor("blue");                                //Using the fontcolor method on the string variable
    document.getElementById("Todays_Date") .innerHTML = result;         //Putting the value of result into HTML element with "Todays_Date" id
}

function myFunction() {                                                 //Defining a function and naming it
    var sentence = "My father-in-law";                                  //Defining a variable and giving it a value
    sentence += " almost through away a perfectly good smart";          //Concatenating the value of the variable
    sentence += " tv because the memory was totally full,";
    sentence += " which caused it to behave strangly.";
    document.getElementById("Concatenate") .innerHTML = sentence;       //Putting the value of sentence into HTML element with "Concatenate" id
}