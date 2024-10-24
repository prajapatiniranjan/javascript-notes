// console.log("hello");

// function p35(){

//     // console.log("function called");
//     // let num1 = 90;
//     // let num2 = 90;
//     // console.log(num1+num2);

// let num1 = parseInt( window.prompt("enter number 1"));
// console.log(num1);
// console.log(typeof(num1));
// let num2 = parseInt( window.prompt("enter number 2"));
// console.log(num1);
// console.log(typeof(num2));

// console.log(num1 + num2)
// // parseint number me convert karta hai string

// }

// p35();

function max35() {
  let a = parseInt(window.prompt("enter number 1"));
  let b = parseInt(window.prompt("enter number 2"));
  // window.alert use for output show's in frontend
  window.alert(a + b);
}

max35();

// there are 3 type of variable declaration

// var let const

// var was use before 2015 in ES6 (ECMA is offical name of java script ECMA stands for eruopian compter manufacturers Association )
// var :- major drawback of var is it can declare the variable again with different type of value.

function max34() {
  var a = "java script";
  console.log(a);

  var a = 89;
  console.log(a);

  let b = "java script ";
  b = 89;

  console.log(b);

  const c = "java script ";
  c = 89;

  console.log(c);
}

max34();
