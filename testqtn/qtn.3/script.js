function validateForm(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    if (name === "" || email === ""){
        alert("Bothe field should be fill up!");
        return false;
    }
    return true;
}
