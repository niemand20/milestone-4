// for (var i = 1; i <=20 ; i++){
//     console.log(i);
//     if(i>=10){
//         break;
//     }
// }

var roastGiven = 0;
while(roastGiven< 10){
    console.log("roast den",roastGiven);
    roastGiven++;
    if (roastGiven>5){
        break;
    }
}


// CONTINUE

var numbers = [12,23,34,25,55,96,45,36,19,78];
for (var i = 0; i< numbers.length; i++){
    var number = numbers[i];
    if(number>50){
        continue;
    }
    console.log(number);
}
    


