var x = 10;
console.log("var x:",x);
if(true)
{
    var x =20;
    console.log("var inside block",x);
}
console.log("var after block",x);


let y = 10;
console.log('let y:',y);
if(true)
{
    let y = 20
    console.log("let inside block",y);
}
console.log("let after block",y);

const z = 10;
console.log("var z:",z);
if(true)
{
    const z =20;
    console.log("const inside block:",z);
}
console.log("const after block",z)
