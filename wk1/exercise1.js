/*  #1
"undefined!"
"null!"
"number!"
"not a number!"
"string!"
"boolean!"
"function!"
"object!"
"array!"
"I have no idea!"*/

function logType(val) {
    if (typeof val == "undefined") {
        console.log("undefined!");
    } else if (val == null) {
        console.log("null!");
    } else if (typeof val == "number") {
        if (isNaN(val)){
            console.log("not a number!");
        }else {
            console.log("number!");
        }
    } else if (typeof val == "boolean") {
        console.log("boolean!");
    } else if (typeof val == "string") {
        console.log("string!");
    } else if (typeof val == "function") {
        console.log("function!");
    } else if (typeof val == "object") {
        if (Array.isArray(val)) {
            console.log("array!");
        } else {
            console.log("object!");
        }
    } else {
        console.log("I have no idea");
    }
}
logType();


//#2
var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};
var b ={};
for (var swab in a){
    var c = a[swab];
    b[c]=swab;

}
console.log(b);

//#3
for (var i = 10; i >= 0; i--) {
    console.log(i);
}
