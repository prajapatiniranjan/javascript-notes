function number() {
  let num1 = parseFloat(window.prompt("Enter number 1"));
  window.alert(num1);
  let num2 = parseFloat(window.prompt("Enter number 2"));
  window.alert(num2);
  let num3 = parseFloat(window.prompt("Enter number 3"));
  window.alert(num3);

  if (num1 > num2) {
    window.alert("Number 1 is Greater");
  } else if (num2 > num3) {
    window.alert("Number 2 is Greater");
  } else {
    window.alert("Number 3 is Greater");
  }
}

number();
