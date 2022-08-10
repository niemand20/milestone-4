// find odd numbers sum from an array

function getSumOfAnArray(numbers){
    let sum = 0;
    for (let i = 0; i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        sum+=element;
        // sum = sum+element;
        // console.log(index, element, sum);
    }
    return sum;
}


function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for (let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element%2!==0){
            console.log(index, element);
            oddNumbers.push(element);
        }
        
    }
    return oddNumbers;
}


const myNumbers = [2,23,37,40,52,92,50,27];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum =  getSumOfAnArray(oddNumbers);
console.log(oddNumberSum);