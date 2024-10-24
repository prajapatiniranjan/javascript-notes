function addNumber() {
  let num1 = parseFloat(document.getElementById("num1")).value;
  let num2 = parseFloat(document.getElementById("num2")).value;
  let num3 = parseFloat(document.getElementById("num3")).value;
  let sum = num1 + num2 + num3;
  document.querySelector("result").innerText = "Sum" + sum;
}
