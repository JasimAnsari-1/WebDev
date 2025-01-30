// let h1 = document.querySelector(".heading");

// function changeText(){
//     h1.innerHTML = "hi i am learn js"
// }



// function addItems(){
//     let list = document.querySelector(".list");
//     let newItem = document.createElement("li");
//     newItem.innerHTML = "Mango";
//     list.appendChild(newItem);
// }



// function changeImage(){
//     let image = document.querySelector(".image");
//     image.src ="/Asset/image.2.jpg";
// }



// let para = document.getElementById("para");
// para.innerHTML="hello"


// var boxes = document.getElementsByClassName("box");
// for(var i=0;i<boxes.length;i++){
//     boxes[i].style.color="Blue";
//     boxes[i].style.backgroundColor = "pink";
// }


function changeStyle(){
    let para = document.getElementsByTagName("p");
    for(let i=0;i<para.length;i++){
        para[i].style.color="blue";
        para[i].style.backgroundColor="pink";
        para[i].style.fontFamily = "arial";
}}