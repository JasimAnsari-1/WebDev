// function sum(x,y){
//     return x+y;
// }
// console.log(sum(6,9));


// function sub(x,y){
//     console.log(x-y);
// }
// sub(6,5);


// function nameAge(name,age){
//     console.log(`name: ${name} and age: ${age}`);
// }
// nameAge("jasim",20);

// function average(a,b,c){
//     let average = (a+b+c)/3;
//     console.log(average)
// }
// average(2,3,5);


// function table(n){
//     for(let i=1;i<=10;i++){
//         console.log(n*i);
//     }
// }
// table(5);



// function printmul(a,b){
//     return a*b;
// }
// console.log(printmul(12,13));



// check the student is adult or not
// function student(age){
//     if(age>=18){
//         return "student is adult";
//     }else{
//         return "student is not adult";
//     }
// }
// console.log(student(11));






//global scope
// let global_variable = "global variable can access from anywhere";

// function check_global_variables(){
//     console.log(global_variable);
// }
// // console.log(global_variable);
// check_global_variables();


//function scope
// function check(){
//     let var1 = "ABC";
//     let var2 = "DEF";
//     console.log(var1);
// }
// check();
// console.log(var2);                   //error var2 is not de3fined



//block scope
// {   
//     var variable_1 = "ABC";        //var donot have block scope
//     const variable_2 = "DEF";
//     let x=2;
//     x*=2;
//     console.log(x);
//     console.log(variable_2);
// }
// console.log(variable_1);


// {   
//     let variable_1 = "ABC";        
//     const variable_2 = "DEF";
//     let x=2;
//     x*=2;
//     console.log(x);
//     console.log(variable_2);
// }
// console.log(variable_1);      // error variable_1 is not defined


// const sum = function(a,b){
    // return a+b;
// }
// console.log(sum(22,45));




//Higher order function

// function add(a,b,ab){
//     let result = a+b;
//     ab(result);
// }
// add(21,14,function(val){
//     console.log(val);
// });


// function table(n,callback){
//     for(let i=1;i<=10;i++){
//         let result = n*i;
//         callback(result);
//     }
// }
// table(5,function(mul){
//     console.log(mul);
// });


// function oddEven(n,callback){
//     if(n%2==0){
//         let result = "even";
//         callback(result);
//     }else{
//         let result = "odd";
//         callback(result);
//     }
// }
// oddEven(54,function(verified){
//     console.log(verified);
// });




//this keyword
// function show(){
//     console.log(this)          //in browser this will log the window object
// }
// show();



// const person = {
//     stu_name: "jas",
//     greet: function(){
//         console.log(this.stu_name);
//     }
// };
// person.greet();



//arrow function

// hello = ()=>{
//     return"hello world";
// }
// console.log(hello());


// const add = (a,b)=>a+b;
// console.log(add(2,3));



// oddEven = (n) =>{
//     if(n%2==0){
//         return"even";
//     }else{
//         return"odd";
//     }
// }
// const n =  parseInt(prompt("enter the number"));
// console.log(oddEven(n));




//this keyword in arrow function
// const person = {
//     name:"jas",
//     sayName:()=>{
//         console.log(this.name);         //not print anything
//     }
// }
// person.sayName();




// setTimeout(()=> {
//     console.log('Hello, world!');
// }, 5000);


//forEach
// const fruits = ['apple','banana','mango','guava'];
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })


// const num = [1,2,3,4,5];
// num.forEach(function(num){
//     console.log(num*2);
// });



// const country = ["india","pakistan","bangladesh","srilanka"];
// country.forEach(function(country){
//     console.log(country.toUpperCase());
// });



// array with object
// let arr = [
//     {
//         stu_name: "jas",
//         roll: 101,
//         mark:37
//     },
//     {
//         stu_name: "john",
//         roll: 102,
//         mark:36
//     },
//     {
//         stu_name: "sam",
//         roll: 103,
//         mark:39
//     },
// ];
// arr.forEach(function(student){
//     console.log(`name: ${student.stu_name},roll: ${student.roll},mark: ${student.mark}`)
// })