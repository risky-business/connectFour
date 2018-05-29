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
    if (typeof val== "undefined") {
        return "undefined!";
    } else if (val == null) {
        return "null!";
    } else if (typeof val== "number") {
        return "number!";
    } else if(typeof val!="number"){
        return "not a number!";
    }
    else if (typeof val== "boolean") {
        return "boolean!";
    } else if (typeof val =="string") {
        return "string!";
    } else if (typeof val =="function") {
        return "function!";
    } else if (typeof val== "object") {
        return "object!";
    } else if (typeof val== []) {
        return "array!";
    } else {
        return "I have no idea";
    }
}
logType();

//#3
for (var i = 10; i >= 0; i--) {
    console.log(i);
}
