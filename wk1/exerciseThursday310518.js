// Write a function called each that accepts either an object or
//an array as its first parameter and a callback as its second parameter.
//
// If the first parameter is an object, it should loop over the object's
//properties and call the callback for each one. The property value
//should be the first parameter passed to the callback and the property
//name should be the second.
//
// If the first parameter is an array, it should loop o
//ver the array's elements and call the callback for each one.
//The array element should be the first parameter passed to the
// callback and the index should be the second.
//

function each(args, fn) {
    if (Array.isArray(args)) {
        for (var i = 0; i < args.length; i++) {
            fn(args[i], i);
        }
    } else {
        for (var p in args) {
            fn(args[p], p);
        }
    }
}

//#2
var testArr = [1, 2, 3, 4, 5, 6];
function a(args) {
    var sliced = args.slice();
    console.log(args);
    return sliced.reverse();
}

a(testArr);

//#3

function getLessThanZero(args) {
    return args.filter(function(fun) {
        return fun < 0;
    });
}
