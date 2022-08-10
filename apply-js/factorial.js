// factorial

function factorial(numbers) {
    let result = 1;
    for (i=1; i<=7 ; i++){
        result = result*i
    }
    return result;
}

const result = factorial(7);
// console.log(result);
// ----------------------------------------------------------------

// factorial in a reverse way

function factorialInReverese(number){
    let result = 1
    for (let i = number; i>=1 ; i--){
         result = result*i
    }
    return result;
}

const factorialResult = factorialInReverese(5);
// console.log(factorialResult);
// ----------------------------------------------------------------


// factorial using while loop

function factorialWithWhile(number){
    let num = 1;
    let result = 1;
    while (num<=number){
        result = result*num;
        num++;
    }
    return result;
}

const result1 = factorialWithWhile(5);
// console.log(result1);

// ----------------------------------------------------------------

// factiorial using while loop in a reverse way

function factorialWhileReverse(number){
    let i = number;
    let result = 1;
    while(i>=1){
        result = result*i;
        i--;
    }
    return result;
}

const result3 = factorialWhileReverse(5);
console.log(result3);
