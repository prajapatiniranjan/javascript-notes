let arr = [343,4456,6753,"Good",5566,];
let arr2 = ["This is array class"];

let arr3 = [5,54,54,34,4,function(){console.log("function cal")}]
let arr4 = [null,undefined,4,554,5,6<7];

console.log(arr);
console.log(arr[9]);
console.log(arr[9][4]);
console.log(arr[9][8]);
console.log(arr[0][9]);
arr3[5]();
console.log(arr4[4]);
console.log(typeof(arr));

for (let i = 0; i<arr.length;i++){
    console.log(i);
    console.log(arr[i])
};

for(let i in arr){
    // index of array
    console.log(i)
}

for(let i of arr){
    // element of array
    console.log(i)
}