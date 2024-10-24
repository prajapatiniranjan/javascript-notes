let arrofobj = [

    {
        "id":1,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    },
     {
        "id":2,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    }, {
        "id":3,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    }, {
        "id":4,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    },
    {
        "id":5,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    },
     {
        "id":6,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    },


     {
        "id":7,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    }, {
        "id":8,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    }, {
        "id":9,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    }, {
        "id":10,
        "imageurl":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/79b319bd-c1d8-4dd7-b415-64c0c45b8cd2/JORDAN+TATUM+3+PF.png",
        "pname":"shoe",
        "bname":"nike",
        "pprice":999
    },
];
let selectdiv = document.querySelector("#ans");

selectdiv.innerHTML = arrofobj.map((card)=>`

 <div style="margin: 20pz;box-shadow: 0px 0px 10px 2px black;">
 <img width="500px" height="auto" src="${card.imageurl}" alt="">
 
    <div>${card.pname}</div>
    <div>${card.pprice}</div>
    <div>Add to cart</div>
    <div>Buy Now</div>

  
   </div>


`).join("     ")