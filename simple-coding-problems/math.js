// Math.pow()
const result = Math.pow(3,8);
console.log(result);

// <<---------------------------------------------------------------->>

// Math.abs()
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);

if(gap<5 ){
    console.log("you can be friends");
}
else{
    console.log("you stay apart");
}
// <<---------------------------------------------------------------->>

// Math.round()
const num  = 3.529;
const fullNumber = Math.round(num);
console.log(fullNumber);
// <<---------------------------------------------------------------->>

// Math.ceil()
const num3 = Math.ceil(2.00001);
console.log(num3);
// <<---------------------------------------------------------------->>
// Math.floor()
const num4 = Math.floor(2.00001);
console.log(num4);

// <<---------------------------------------------------------------->>

// Math.randon() will always get floating point value
const random = Math.random()*100

console.log(random);

// to get integer number output, use Math.round()
const randomNum = Math.random()*100;
console.log(Math.round(randomNum));

for (let i = 0 ; i<=20 ; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
