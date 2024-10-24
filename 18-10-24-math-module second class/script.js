// let a = Math.PI;
// console.log(a);

// let b = Math.SQRT2;
// console.log(b);

// let c = 56.7;

// console.log(Math.round(c));
// console.log(Math.floor(c));
// console.log(Math.ceil(c));
// console.log(Math.trunc(c));   //102.9 102 integer .9 decimal hata deta hai
// console.log(Math.abs(c));
// console.log(Math.pow(5,6));
// console.log(Math.random(c));

// onclick ki jagah addEventListener use krte hai

let selectbtn = document.querySelector("#btn");
selectbtn.addEventListener("click", show);

function captcha() {
  let str =
    "!@#$%^&*()_+1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
  let store = "";

  let str =
    "!@#$%^&*()_+1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

  let store = "";

  for (let i = 0; i < 6; i++) {
    let random = Math.random();
    let ans = random * str.length;
    let afterfloor = Math.floor(ans);
    let cha = str.charAt(afterfloor);
    store = store + cha;
  }

  console.log(store);
  let selecth1 = document.querySelector("#output");
  selecth1.innerHTML = store;
}
