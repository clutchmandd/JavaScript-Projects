//Function using the Concat() Method
function full_sentence() {
    var part1 = "Not all dogs ";
    var part2 = "are wolves, ";
    var part3 = "but all wolves ";
    var part4 = "are dogs.";
    var whole_sentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

//Function using the Slice() Method
function slice_method() {
    var sentence = "I'm going to be a Software Engineer!";
    var section = sentence.slice(27,36);
    document.getElementById("Slice") .innerHTML = section;
}

//toUpperCase() Method
var uppercase = "this sentence is all uppercase.";
document.write(uppercase.toUpperCase());

document.write("<br>");
document.write("<br>");

//search() Method
var search_method = "All cats eat mice.";
document.write(search_method.search("cats"));

document.write("<br>");
document.write("<br>");

//toString() Method
function string_method() {
    var numstring = 105;
    document.getElementById("numbers_to_string") .innerHTML = numstring.toString();
}

//toPrecision() Method
function precision_method() {
    var Z = 14569749.9102040;
    document.getElementById("precision") .innerHTML = Z.toPrecision(10);
}

//toFixed() Method
var num = 10.3948574394;
document.write(num.toFixed(2));

document.write("<br>");
document.write("<br>");

//valueOf() Method
var me = "David Dixon";
document.write(me.valueOf());

document.write("<br>");
document.write("<br>");

