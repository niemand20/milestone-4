var shoppingCart = {
    books:3,
    pen: 4,
    sunglass: 9,
    mouse: 11,
    keyboard: 2
}

// when property name is known, use dot notation to get the property value
// ---------------------------------------------------------------------------
var penCount = shoppingCart.pen;
// console.log("the number of pens are ",penCount);

// console.log(shoppingCart);

// alternative system
// when property name is known, use dot notation to get the property value
var penCount2 = shoppingCart["pen"];
// console.log("the number of pens are ",penCount2);

// access keys in object
var properties = Object.keys(shoppingCart);
// console.log(properties);

// access values in object
var values = Object.values(shoppingCart);
// console.log(values);


// another way to get a property value

// var propertyName = 'mouse';
// var propertyValue = shoppingCart[propertyName];

// console.log(propertyName, propertyValue);

// console.log(shoppingCart);

// set property value
// system-1
shoppingCart.mouse = 100;
// console.log(shoppingCart);

// system-2
shoppingCart['mouse'] = 121;
// console.log(shoppingCart);


var propertyName = 'mouse';
shoppingCart[propertyName] = 77;
console.log(shoppingCart);




