///#1
function sum() {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}
sum();

/// #2
function fun1() {
    console.log("hello!");
}
function fun2() {
    console.log("Goodbye!");
}

function waitThenRun(args, args2) {
    setTimeout(args, 1500);
    setTimeout(args2, 3000);
}
waitThenRun(fun1, fun2);

///#3

function lotsOfNums(num) {
    if (num <= 0 || isNaN(num)) {
        return "error";
    } else if (num >= 1000000) {
        return num;
    } else {
        for (; num < 1000000; num *= 10) {}
        return num;
    }
}
lotsOfNums(34);
