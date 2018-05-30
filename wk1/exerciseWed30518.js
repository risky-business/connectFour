// #1
function sum(){
    var total=0;

    for (var i=0; i<arguments.length; i++){
        total = total + arguments[i];

    }
    return total;
}
sum();

/// #2]
function fun1(){
    console.log("hello!");
}
function fun2(){
    console.log("Goodbye!");
}

function waitThenRun(args,args2){
    setTimeout(args,1500);
    setTimeout(args2,3000);
}
waitThenRun(fun1,fun2);















//Write a function that takes another function as a parameter. It should wait 1.5 seconds and then run the function that was passed in.
// waitThenRun(function() {
//     console.log('Hello!');
// }); // logs 'Hello!' 1.5 seconds later
//
// waitThenRun(function() {
//     console.log('Goodbye!');
// }); // logs 'Goodbye!' 1.5 seconds later
