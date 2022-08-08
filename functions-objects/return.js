function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1+num2;
    return sum
}

// var result = add(12,32);
// console.log(result);


function bringSingara(money){
    var price = 10;
    var quantity = money/price;
    return quantity;

}

var singaras = bringSingara(213);
console.log(singaras);