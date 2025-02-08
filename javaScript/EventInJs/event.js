let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
    console.log("button was click");
    let a = 25;
    a++;
    console.log(a)
};

let box = document.querySelector("#box1");
box.onmouseover = ()=>{
    box.style.backgroundColor = "red"
};

