//Dictionary Function
function my_Dictionary() {
    var Car = {
        //Creating KVPs
        Type:"Coupe",
        Color:"Red",
        Make:"Porsche",
        Model:"911 Turbo S",
        Engine:"3.8L Flat 6",
        Horsepower:"640 HP",
    };
    //Deleting a KVP
    delete Car.Color;
    document.getElementById("Dictionary") .innerHTML = Car.Type + ("<br>") + Car.Color 
    + ("<br>") + Car.Make + ("<br>") + Car.Model + ("<br>") + Car.Engine + ("<br>") 
    + Car.Horsepower;
}