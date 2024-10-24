// let count = 0;

// function slider(){
//     setInterval(runslider,3000);
//     function runslider(){
//         if (count ===2){
//             let selectarticle = document.querySelector('#slidediv');
//             selectarticle.style.marginLeft = "-1000px";
//             selectarticle.style.transition = "margin.left .5s";
//             count++;
//         } else if(count ===1){
//             let selectarticle = document.querySelector('#slidediv');
//                 selectarticle.style.marginLeft = "-1000px";
//                 selectarticle.style.transition = "margin.left .5s";
//                 count++;
//         } else if(count ===2){
//             let selectarticle = document.querySelector('#slidediv');
//             selectarticle.style.marginLeft = "-2000px";
//             selectarticle.style.transition = "margin.left .5s"
//             count;
//         }
//     }
// }


let count = 0;

function slider() {
    setInterval(runslider, 3000);

    function runslider() {
        let selectarticle = document.querySelector('#slidediv');
        
        if (count === 0) {
            selectarticle.style.marginLeft = "0px";
            selectarticle.style.transition = "margin-left .5s";
            count++;
        } else if (count === 1) {
            selectarticle.style.marginLeft = "-1000px";
            selectarticle.style.transition = "margin-left .5s";
            count++;
        } else if (count === 2) {
            selectarticle.style.marginLeft = "-2000px";
            selectarticle.style.transition = "margin-left .5s";
            count = 0; // Reset to loop the slider
        }
    }
}

slider(); // Start the slider
