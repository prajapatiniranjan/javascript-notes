let arrstr = ["urcbbc", "rere", "rerre,", "ab"];
arrstr.sort();
console.log(arrstr);

let arr = [65, 65, 4, 34, 343, 578, 454];
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

let arr1 = [77, 7, 7, 7664362, 2454, 235, 325];

arr1.sort(function (a, b) {
  return b - a;
});
console.log(arr1);

let output = arr1.reduce(function (a, b) {
  return a + b;
});
console.log(output);
