var shoppingCart = {
    books:3,
    pen: 4,
    sunglass: 9,
    mouse: 11,
    keyboard: 2
}
const keys = Object.keys(shoppingCart);
// console.log(keys);
const values = Object.values(shoppingCart);
// console.log(values);

for (var propertyName in shoppingCart){
    console.log(propertyName);
    // const value = shoppingCart[propertyName];
    // console.log(propertyName, value);
}




var friendsAge= {
    robi: 34,
    kobi: 32,
    tobi: 29,
    pobi: 31,
    hobi: 23,
    jamal: 24
}






// to get property name and their values using for loop
// for(var i = 0; i< keys.length; i++){
//     var propertyName = keys[i];
//     // console.log(propertyName);
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, propertyValue);



//     // console.log(keys[i]);
// }

// to get property name and their values using for in loops

