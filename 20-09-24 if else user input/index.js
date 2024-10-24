function tds() {
  let salary = parseFloat(window.prompt("Enter Your Salary"));

  let tax = parseFloat();

  if (salary <= 350000) {
    window.alert("No need to pay tax");
  } else if (salary >= 351000 && salary <= 800000) {
    tax = (salary / 100) * 10;
    window.alert("you need to pay tax is = " + tax);
  } else if (salary > 800001) {
    tax = (salary / 100) * 17;
    window.alert("you need to pay tax is = " + tax);
  } else {
    window.alert("Invailid key");
  }
}

tds();
