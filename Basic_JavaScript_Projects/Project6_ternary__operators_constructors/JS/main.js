//Ternary Operator Function to determine acceptable ride height
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";
}

//Ternary Operator Function to determine acceptable voting age
function Vote_Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age") .value;
    Can_vote = (Age < 18) ? "You are not yet old enough":"You are old enough";
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote.";
}

//Keywords and Constructors Function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

//New_and_This Keyword Function for Jack's Vehicle
function Jack_Vehicle() {
    document.getElementById("New_and_This") .innerHTML =
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + 
    " manufactured in " + Jack.Vehicle_Year;
}

//My Object Constructor Function
function Person(First, Last, Age, Height) {
    this.person_First = First;
    this.person_Last = Last;
    this.person_Age = Age;
    this.person_Height = Height;
}
var David = new Person("David", "Dixon", 35, "6\'0\"");
function My_Person() {
    document.getElementById("Me") .innerHTML = 
    David.person_First + " " + David.person_Last + " is " + 
    David.person_Age + " years young, and is " + David.person_Height + 
    " tall.";
}

//Nested Function
function count_Function() {
    document.getElementById("Nested_Function") .innerHTML = Count();
    function Count() {
        var Starting_point = 1;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}