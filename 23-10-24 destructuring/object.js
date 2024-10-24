// Destructuring of array and Object

// Destructuring islie use krte hame use bar bar call na krna pade
let a = {
  id: 1,
  name: "Niranjan",
  age: 26,
  course: "fsd",
};
a.name;
let { name, age, course, id } = a;
console.log(name);
console.log(age);
console.log(course);
console.log(id);

// what is the difference between method and function.

// jab kisi funtion ko object andar creat krte hai use method kahte hai

// b.sum() se ise call krenge

let b = {
  sum: function () {},
};

// when we creat function  outside of obj is call function and normally bhi use krte hai
function show() {}
