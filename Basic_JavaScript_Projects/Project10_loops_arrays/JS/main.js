//While Loop function
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 16) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop") .innerHTML = Digit;
}

//String Length property function
function My_Name() {
    D = "My name is David Dixon.";
    document.getElementById("String_Length") .innerHTML = D + " String length = " + D.length;
}

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Saxophone"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content
}

//Array function
function array_Function() {
    var Car_Picture = []
    Car_Picture[0] = "red car";
    Car_Picture[1] = "blue car";
    Car_Picture[2] = "black car";
    Car_Picture[3] = "green car";
    document.getElementById("Array") .innerHTML = "This is a picture of a " + Car_Picture[0] + ".";
}

//Constant Function
function constant_function() {
    const VW = {color:"orange", year:"1962", type:"Volkswagon",};
    VW.model = "Beetle"
    VW.engine = "350 HP turbocharged 2332cc engine";
    VW.electrical = "12 volt system";
    document.getElementById("Constant") .innerHTML = "This " + 
    VW.color + " " + VW.year + " " + VW.type + " " + VW.model + 
    " has a " + VW.engine + " and has been upgraded from it's stock " + 
    "6 volt system to a modern " + VW.electrical + ".";
}

//Let Keyword 
var Z = 25;
function Let_Function() {
    document.getElementById("Let_Keyword") .innerHTML = Z;
    {
        let Z = 35;
        document.getElementById("Let_Keyword") .innerHTML = "<br>" + Z;
    }
}
document.getElementById("Let_Keyword") .innerHTML = "<br>" + Z;

//Return Statement
function return_Function() {
    var C = 3
    return C * C;
}
document.getElementById("Return_Statement") .innerHTML = return_Function();

//Object using let keyword with properties and a method
let car = {
    make: "VW ",
    model: "Beetle",
    year: "1962 ",
    color: "orange ",
    decription : function() {
        return "The car is a " + this.year + this.color + 
        this.make + this.model + ".";
    }
}
document.getElementById("Car_Object") .innerHTML = car.decription();

//Loop with a Break Statement
let i = 0;
while (i < 6) {
    if (i === 3) {
        break;
    }
    i = i + 1;
}
document.getElementById("Break_Statement") .innerHTML = i;

//Loop with a Continue Statement
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text = text + i;
}
document.getElementById("Continue_Statement") .innerHTML = text