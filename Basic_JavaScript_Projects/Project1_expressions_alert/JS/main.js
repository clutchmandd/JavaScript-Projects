window.alert("Hello, world!");

document.write("Hello, world!");

var A = "This is a string";

document.write(A);

var B = "I never say no to hot cheese.";

document.write(B);

document.write("My father always says, \"If it ain\'t broke, don\'t fix it.\"");

document.write("\"Perfection is achieved not when there is nothing more to add,"
+ " but rather when there is nothing more to take away.\""
+ " -Antione de Saint-Exupery");

var C = "All cars have motors," + " but not all motors use gas." + " Some cars don\'t use fuel at all.";

document.write(C);

var Family = "The Dixons", Dad = "David", Mom = "Jessica", Son1 = "Jonah", Son2 = "Samuel";

var Family = Family.fontcolor("red");

var Dad = Dad.fontcolor("green");

var Mom = Mom.fontcolor("purple");

var Son1 = Son1.fontcolor("blue");

var Son2 = Son2.fontcolor("orange");

document.write(Family);
document.write(Dad);
document.write(Mom);
document.write(Son1);
document.write(Son2);

document.write(10 + 10);

function My_First_Function() {                                   //Defining a function and naming it
    var str = "This text is green!";                             //Defining a variable and giving it a string value
    var result = str.fontcolor("green");                         //Using the fontcolor method on the string variable
    document.getElementById("Green_Text") .innerHTML = result;   //Putting the value of result into HTML element with "Green_Text" id
}