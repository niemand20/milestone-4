// 1.inch to ft
// function inchToFt(inches){
//     const feet = inches/12;
//     return feet
// }

// const dadaInches = 144;
// const dadaFeet = inchToFt(dadaInches);
// console.log(dadaFeet);
// <<-------------------------------------------------------------------------->>
// <<-------------------------------------------------------------------------->>

// 2. even number check

function isEven(number){
    const remainder = number%2;
    if(remainder===0){
        return(number+ " is even"  );
    }
    else{
        return(number+" is not even");
    }
}

const evenCheck = isEven(34);
console.log(evenCheck);

