function  dom(){
    let a = document.querySelector("#text");
    a.style.color = "blue";
    a.style.fontSize = "28px"
    console.log(a);
    let b = document.querySelector(".heading");
    console.log(b);
    b.style.color = "green";
    b.style.fontSize = "40px";


    // document.querySelector se id or class select hoti hai.....

    // for image zoom in ke liye cursor image pr jae to zoom in ho jae

}


function zoom(){
    let c = document.querySelector("#img1");
    c.style.scale = "2.4";
    c.style.transition = "scale 0.8s"
    console.log(c);
}
