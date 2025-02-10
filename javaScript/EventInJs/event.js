// 
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("button was click");
//     let a = 25;
//     a++;
//     console.log(a)
// };

// let box = document.querySelector("#box1");
// box.onmouseover = ()=>{
//     box.style.backgroundColor = "red"
// };


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };




// let box = document.querySelector("#box1");
// box.addEventListener("mouseover" , ()=>{
//     box.style.backgroundColor = "red"
// });
// box.addEventListener("mouseout" , ()=>{
//     box.style.backgroundColor = "dodgerblue"
// });


let btn = document.querySelector("#btn-tog");
let currMode = "light";
btn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor = "black"
    }else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white"

    }
    console.log(currMode);
});


