//Function for incorrect phone number alert
function validateForm() {
    let x = document.forms["phoneForm"]["phonenumber"].value;
    if (x == "") {
        alert("Phone number must be filled out.");
        return false;
    }
}

//Functions to open and close the Contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}