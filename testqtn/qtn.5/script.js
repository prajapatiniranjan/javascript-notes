function compare(){
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let num3 = document.querySelector('#num3').value;
    let largest = Math.max(num1,num2,num3);
    
    document.querySelector('#result').textContent = "The largest number is: " + largest;
}