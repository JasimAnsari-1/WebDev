let a = 10;
console.log(a);

let b = null;
console.log(b);

let isTrue = true;
console.log(isTrue);


let fname = 'Jasim'
console.log(fname);



object
let person = {
    name:'jasim',
    age:25,
    email:'jasim123@gmail.com',
    gender:'female'
}
console.log(person)




operators
       Arithmetic
let a = 41;
let b = 20;

sum = a+b;
console.log(sum);

diff = b-a;
console.log(diff);

mul = a*b;
console.log(mul);

div = a/b;
console.log(div);

let rem = a%b;
console.log(rem);


postIncr = a++;
console.log(postIncr);

preIncr = ++a;
console.log(preIncr);

postDecr = a--;
console.log(postDecr);

preDecr = --a;
console.log(preDecr);



comparison operator
let a = 10;
let b = 20;

console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
console.log(a == b); // false
console.log(a === b); // false
console.log(a != b); // true
console.log(a !== b); // true


bitwise
let a = 5;  // 0101 in binary
let b = 3;  // 0011 in binary

console.log(a & b);  // 1  (0101 & 0011 = 0001)
console.log(a | b);  // 7  (0101 | 0011 = 0111)
console.log(a ^ b);  // 6  (0101 ^ 0011 = 0110)
console.log(~a);     // -6 (bitwise NOT of 0101 = 1010, which is -6 in two's complement)
console.log(a << 1); // 10 (left shift by 1: 0101 << 1 = 1010)
console.log(a >> 1); // 2  (right shift by 1: 0101 >> 1 = 0010)
console.log(a >>> 1); // 2 (unsigned right shift by 1: 0101 >>> 1 = 0010)

logical
let a = true;
let b = false;

console.log(a && b);  // false (Logical AND)
console.log(a || b);  // true  (Logical OR)
console.log(!a);      // false (Logical NOT)



