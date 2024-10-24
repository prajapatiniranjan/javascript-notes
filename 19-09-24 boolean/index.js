function check1(){
    let result = window.confirm("Do you really want to logout;");
    console.log(result);

    if(result){
        window.alert("you've been log out succesfully");
        window.location.href="./login.html"
    }
    else{
        window.alert("Invailid key");
    }

}
check1();


// window.location.href = "address" (used for navigate to another page)